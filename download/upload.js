let worksheet;

function handleFileDrop(e) {
  console.log('文件拖放事件触发');
  e.preventDefault();

  const files = e.dataTransfer.files;
  for (let file of files) {
    const reader = new FileReader();
    const fileName = file.name.toLowerCase();

    reader.onload = function(event) {
      try {
        let workbook;

        if (fileName.endsWith('.csv')) {
          // ✅ 正确处理 CSV：使用 XLSX.read + type: 'string'
          const csvData = event.target.result;
          const csvWithNoBOM = csvData.replace(/^\ufeff/, '');
          
          workbook = XLSX.read(csvWithNoBOM, {
            type: 'string',
            bookType: 'csv'
          });

        } else {
          // 处理 XLS/XLSX
          const data = new Uint8Array(event.target.result);
          workbook = XLSX.read(data, { type: 'array' });
        }

        // 取第一个 sheet
        const firstSheetName = workbook.SheetNames[0];
        worksheet = workbook.Sheets[firstSheetName];

        alert('✅ 文件读取并解析成功！');

      } catch (error) {
        alert('❌ 文件解析失败，请检查文件格式是否正确。');
        console.error('解析错误详情:', error.message);
      }
    };

    reader.onerror = function() {
      alert('❌ 文件读取失败，请重试。');
      console.error('文件读取失败', reader.error);
    };

    // 读取方式
    if (fileName.endsWith('.csv')) {
      reader.readAsText(file); // CSV 用文本方式读取
    } else {
      reader.readAsArrayBuffer(file); // Excel 用二进制方式
    }
  }
}

function parseWorkSheet(params) {
  try {;
    window.chartData = [];
    const headerRow = Number(params.header); // 表头所在行（1 开始）
    const xcolumn = Number(params.xcolumn) - 1; // X 列索引（0 开始）
    const yRangeStr = params.ycolumn; // 如 "2:20"

    // 1. 将 worksheet 转为 JSON 数组（每项是一行）
    // 使用 { header: 1 } 确保我们得到数组结构，而不是对象
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    if (jsonData.length === 0) {
      alert('❌ 文件数据为空，无法解析。');
      console.warn('文件为空');
      return;
    }

    // 2. 检查 headerRow 是否有效
    if (isNaN(headerRow) || headerRow < 1 || headerRow > jsonData.length) {
      alert(`❌ 表头行号无效：${params.header}，文件只有 ${jsonData.length} 行。`);
      console.error('header 行号超出范围');
      return;
    }

    // 3. 提取表头行（注意：jsonData 是 0 开始索引）
    const headerRowIndex = headerRow - 1; // 转为 0 开始
    const headers = jsonData[headerRowIndex];

    if (!headers || typeof headers !== 'object') {
      alert('❌ 指定的表头行为空或格式错误。');
      console.error('表头行无效:', headers);
      return;
    }

    // 4. 获取数据行：表头之后的所有行
    const dataRows = jsonData.slice(headerRowIndex + 1);

    if (dataRows.length === 0) {
      alert('⚠️ 表头后无数据行。');
      console.warn('无数据行');
      return;
    }

    // 5. 解析 yRangeStr
    const [startColStr, endColStr] = yRangeStr.split(':').map(s => s.trim());
    const startCol = parseInt(startColStr, 10) - 1;
    const endCol = parseInt(endColStr, 10) - 1;

    if (isNaN(startCol) || isNaN(endCol) || startCol < 0 || endCol < startCol) {
      alert('❌ ycolumn 参数格式错误或范围无效，请检查输入（例如：2:5）。');
      console.error('ycolumn 格式错误:', yRangeStr);
      return;
    }

    // 6. 检查 xcolumn 是否在 headers 范围内
    const headerKeys = Object.keys(headers);
    if (xcolumn < 0 || xcolumn >= headerKeys.length) {
      alert(`❌ xcolumn 列索引 ${params.xcolumn} 超出范围（有效列：1-${headerKeys.length}）。`);
      console.error('xcolumn 超出范围:', xcolumn);
      return;
    }

    // 7. 提取 X 数据
    const xData = [];
    const xKey = headerKeys[xcolumn]; // 找到 X 列对应的 key
    dataRows.forEach(row => {
      let xVal = row[xKey]; // 使用列名访问
      const parsedDate = parseDate(xVal);
      const x = formatDateToStandard(parsedDate);
      xData.push(x !== null ? x : xVal);
    });

    let seriesCount = 0;

    // 8. 遍历 Y 列范围
    for (let colIndex = startCol; colIndex <= endCol; colIndex++) {
      const yKey = headerKeys[colIndex];
      if (!yKey || headers[yKey].toString().trim() === '') {
        console.log(`⚠️ 列 ${colIndex + 1} 表头为空，停止解析。`);
        break; // 表头为空则停止
      }

      const yName = headers[yKey];
      const yData = [];

      dataRows.forEach(row => {
        let yVal = row[yKey];
        const numY = yVal !== undefined ? (typeof yVal === 'number' ? yVal : parseFloat(yVal)) : null;
        yData.push(isNaN(numY) ? null : numY);
      });

      const chartSeries = {
        x: xData,
        y: yData,
        name: `${yName}`,
        yaxis: 'y',
        visible: true,
      };

      window.chartData.push(chartSeries);
      seriesCount++;
    }

    if (seriesCount > 0) {
      alert(`✅ 数据解析成功！共生成 ${seriesCount} 条曲线。`);
    } else {
      alert('⚠️ 解析完成，但未生成任何有效曲线，请检查 ycolumn 范围和数据内容。');
    }

  } catch (error) {
    alert('❌ 数据解析过程中发生错误，请检查文件内容或参数设置。');
    console.error('解析异常:', error);
  }
}
/**
 * 通用日期解析函数，支持多种格式
 * @param {any} input 输入值（字符串、数字、Date 等）
 * @returns {Date|null} 成功返回 Date 对象，失败返回 null
 */
function parseDate(input) {
  if (!input || (typeof input !== 'string' && typeof input !== 'number')) {
    return null;
  }

  // 如果是数字（可能是 Excel 序列号）
  if (typeof input === 'number') {
    return excelSerialDateToJSDate(input);
  }

  let str = input.trim();

  // 统一将常见分隔符（/, ., -, :, 空白）替换为单个空格，便于 split
  const normalized = str.replace(/[\/\.\-\:\s]+/g, ' ');
  const parts = normalized.split(' ').map(p => p.trim()).filter(Boolean);

  if (parts.length < 3) {
    return null; // 至少需要 年 月 日
  }

  // 提取年月日时分秒（最多6部分）
  const [y, m, d, H = '0', M = '0', S = '0'] = parts;

  const year = parseInt(y, 10);
  const month = parseInt(m, 10) - 1; // JS 月份从 0 开始
  const day = parseInt(d, 10);
  const hour = parseInt(H, 10);
  const minute = parseInt(M, 10);
  const second = parseInt(S, 10);

  // 验证是否为有效数字
  if (
    isNaN(year) || isNaN(month) || isNaN(day) ||
    isNaN(hour) || isNaN(minute) || isNaN(second)
  ) {
    return null;
  }

  // 构造 Date 对象
  const date = new Date(year, month, day, hour, minute, second);

  // 验证日期是否合法（防止 2025-13-45 这种）
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}

function excelSerialDateToJSDate(serial) {
  if (isNaN(serial)) return null;
  // Excel 错误地认为 1900 是闰年，所以调整
  const delta = serial - 25569; // 25569 = 1970-01-01 的 Excel 序列
  const utc = delta * 86400 * 1000;
  const date = new Date(utc);
  return isNaN(date.getTime()) ? null : date;
}

/**
 * 将 Date 对象格式化为 "YYYY-MM-DD HH:mm:ss"
 * @param {Date|null} date Date 对象
 * @returns {string|null} 格式化后的字符串，失败返回 null
 */
function formatDateToStandard(date) {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return null;
  }

  const pad = (n) => n.toString().padStart(2, '0');
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hour = pad(date.getHours());
  const minute = pad(date.getMinutes());
  const second = pad(date.getSeconds());

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

