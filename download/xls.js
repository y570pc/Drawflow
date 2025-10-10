// ✅ 封装：将数据导出为带样式的 Excel 文件
function exportToExcel(sheets) {


  // ✅ 创建 worksheet
  const wb = XLSX.utils.book_new();

  // ✅ 定义样式
  const styles = {
    header: {
      fill: { fgColor: { rgb: 'FFA500' } }, // 橙色背景
      font: { bold: true, color: { rgb: 'FFFFFF' } }, // 白色粗体字
      alignment: { horizontal: 'center' }
    },
    station: {
      fill: { fgColor: { rgb: 'D3D3D3' } } // 灰色
    },
    collector: {
      fill: { fgColor: { rgb: 'FFE4E1' } } // 浅红
    },
    storage: {
      fill: { fgColor: { rgb: 'FFFFCC' } } // 浅黄
    },
    cmu: {
      fill: { fgColor: { rgb: 'E6F7E6' } } // 浅绿
    }
  };

  // ✅ 遍历每个 sheet
  // ✅ Step 3: 遍历每个 sheet，生成 worksheet 并添加
  for (const sheetName in sheets) {
    const data = sheets[sheetName].records;
    const fields = sheets[sheetName].fields;

    // ✅ 构建表头和数据
    const headers = fields.map(field => field.name);
    const wsData = [headers]; // ✅ wsData 定义在循环内

    data.forEach(row => {
      const rowData = fields.map(field => {
        const value = row[field.id];
        return value == null ? '' : value;
      });
      wsData.push(rowData);
    });

    // ✅ 创建 worksheet
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    // ✅ 设置列宽（可选）
    const colWidths = fields.map(field => ({ wch: Math.max(10, field.name.length + 2) }));
    ws['!cols'] = colWidths;

    // ✅ 获取列范围 A, B, C...
    const startCol = 'A';
    const colCount = fields.length;
    const cols = [];
    for (let i = 0; i < colCount; i++) {
      cols.push(String.fromCharCode(startCol.charCodeAt(0) + i));
    }

    // ✅ 遍历每一行应用样式
    for (let rowNum = 1; rowNum <= wsData.length; rowNum++) {
      const rowCells = cols.map(col => `${col}${rowNum}`);

      if (rowNum === 1) {
        // 表头行
        rowCells.forEach(key => {
          if (ws[key]) {
            ws[key].s = styles.header;
          }
        });
      } else {
        // 数据行：根据第一列值设置整行样式
        const firstCell = ws[`A${rowNum}`];
        const firstCellValue = firstCell ? firstCell.v : '';

        let style = null;
        if (typeof firstCellValue === 'string') {
          if (firstCellValue.includes('电站')) {
            style = styles.station;
          } else if (firstCellValue.includes('集电线')) {
            style = styles.collector;
          } else if (firstCellValue.includes('PCS') || firstCellValue.includes('储能单元')) {
            style = styles.storage;
          } else if (firstCellValue.includes('CMU') || firstCellValue.includes('RACK')) {
            style = styles.cmu;
          }
        }

        if (style) {
          rowCells.forEach(key => {
            if (ws[key]) {
              ws[key].s = style;
            }
          });
        }
      }
    }

    // ✅ 将 worksheet 添加到 workbook
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
  }

  // ✅ Step 4: 生成文件并下载
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary', cellStyles: true });

  function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
  }

  const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
  saveAs(blob, '导出数据.xlsx');
}

// ✅ 使用 fetch 获取数据，并在 .then() 中调用 exportToExcel
function fetchDataAndExport(id) {
  const nodeData = editor.getNodeFromId(id);

  fetch(`http://localhost:5000/api/shared-data/${encodeURIComponent(nodeData.name)}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => {
      if (!res.ok) {
        return res.json()
          .then(errData => { throw new Error(errData.error || `HTTP ${res.status}`); })
          .catch(() => { throw new Error(`请求失败: ${res.status} ${res.statusText}`); });
      }
      return res.json(); // 返回解析后的 JSON
    })
    .then(data => {
      let output = {}
      if (nodeData.name!=="结果保存"){
        output[nodeData.name] = data
      }else{
        output = data
      }
        

      exportToExcel(output); // ✅ 调用封装好的导出函数
      alert('✅ 【' + nodeData.name + '】数据导出成功！');
    })
    .catch(err => {
      console.error('请求失败:', err.message);
      alert('❌ 执行失败：' + err.message);
    });
}
