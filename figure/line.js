/**
 * 创建一个支持拖拽图例切换Y轴、搜索过滤、十字线标注的交互式图表
 * @param {Array} allData - 图表数据数组，每个对象包含 x, y, name, yaxis, visible
 * @param {String} chartId - 要渲染的 DOM 元素 ID (默认 'chart')
 * @param {String} leftLegendId - 左侧图例容器 ID (默认 'left-axis-legend')
 * @param {String} rightLegendId - 右侧图例容器 ID (默认 'right-axis-legend')
 * @param {String} filterInputId - 搜索输入框 ID (可选)
 */
function createInteractiveChart(
    allData,
    chartId = 'chart',
    leftLegendId = 'left-axis-legend',
    rightLegendId = 'right-axis-legend',
    filterInputId = null,
    title = ''
) {
    // --- 数据映射 ---
    let traces = allData.map(t => ({
        x: t.x,
        y: t.y,
        name: t.name,
        yaxis: t.yaxis === 'y2' ? 'y2' : 'y',
        visible: t.visible, // 默认 true
        mode: 'lines',
        hoverinfo: 'none',
        hovertemplate: '<extra></extra>'
    }));

    // --- 布局配置 ---
    const layout = {
        title: title,
        yaxis: {
            title: ''
        },
        yaxis2: {
            title: '',
            overlaying: 'y',
            side: 'right',
            showgrid: false,
            ticks: ''
        },
        xaxis: {
            title: {
            text: '时间',
            offset: 80
            },
            tickformat: '%Y-%m-%d\n%H:%M:%S',
            showgrid: false,
            ticks: '',
        },
        showlegend: false,
        margin: { b: 100 }
    };

    // --- 获取 DOM 元素 ---
    const chartDiv = document.getElementById(chartId);
    const leftLegend = document.getElementById(leftLegendId);
    const rightLegend = document.getElementById(rightLegendId);
    const filterInput = document.getElementById(filterInputId);

    // --- 初始化图表 ---
    function plotChart() {
        Plotly.newPlot(chartDiv, traces, layout).then((gd) => {
            storeColors(gd);
            buildLegend();
            bindEvents();
        });
    }

    // --- 绑定事件 ---
    function bindEvents() {
        chartDiv.on('plotly_hover', onPlotHover);
        chartDiv.on('plotly_unhover', onPlotUnhover);
        filterInput.addEventListener('input', filterSeries);

    }

    // --- 构建自定义图例 ---
    function buildLegend() {
        leftLegend.innerHTML = '';
        rightLegend.innerHTML = '';


        traces.forEach(t => {
            // 仅显示 visible === true 的图例项
            if (!t.visible || t.visible === 'legendonly') return;

            const div = document.createElement('div');
            div.className = 'legend-item';
            div.textContent = t.name;
            div.title = t.name;
            div.draggable = true;
            div.dataset.name = t.name;

            // 设置颜色边框和文字
            if (t.color) {
                div.style.borderColor = t.color;
                div.style.borderWidth = '2px';
                div.style.color = t.color;
            }

            // 点击切换显隐
            div.onclick = function (e) {
                e.stopPropagation();
                t.visible = t.visible === true ? 'legendonly' : true;

                if (t.visible === 'legendonly') {
                    div.style.color = '#ccc';
                    div.style.borderColor = '#ccc';
                    div.style.fontStyle = 'italic';
                } else {
                    div.style.color = t.color;
                    div.style.borderColor = t.color;
                    div.style.fontStyle = 'normal';
                }
                updateChart();
            };

            // 拖拽事件
            div.addEventListener('dragstart', onDragStart);
            div.addEventListener('dragend', () => div.classList.remove('dragging'));

            // 初始隐藏样式
            if (t.visible === 'legendonly') {
                div.style.color = '#ccc';
                div.style.borderColor = '#ccc';
                div.style.fontStyle = 'italic';
            }

            // 添加到对应图例区
            if (t.yaxis === 'y') {
                leftLegend.appendChild(div);
            } else {
                rightLegend.appendChild(div);
            }
        });
    }

    // --- 拖拽事件 ---
    function onDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.dataset.name);
        e.target.classList.add('dragging');
    }

    function allowDrop(e) {
        e.preventDefault();
    }

    function onDrop(e) {
        e.preventDefault();
        const name = e.dataTransfer.getData('text/plain');
        const targetSection = e.currentTarget.id;
        const trace = traces.find(t => t.name === name);
        if (!trace) return;

        const newAxis = targetSection === leftLegendId ? 'y' : 'y2';
        if (trace.yaxis !== newAxis) {
            trace.yaxis = newAxis;
            updateChart();
        }
    }

    // --- 搜索过滤 ---
function filterSeries(e) {
  const query = e.target.value.trim();
  let keywords = [];
  if (query) {
    keywords = query.split('|').map(k => k.trim().toLowerCase()).filter(k => k);
  }

  // 重置所有 trace 的 visible 状态（用于图表显示）
  traces.forEach(trace => {
    const matches = keywords.length === 0 ||
      keywords.some(k => trace.name.toLowerCase().includes(k));
    trace.visible = matches ? true : 'legendonly';
  });

  // ✅ 重建图例（会根据 trace.yaxis 和 trace.visible 自动分组）
  buildLegend();

  // ✅ 同步更新图表
  updateChart()
}


    // --- 更新图表 ---
    function updateChart() {
        Plotly.react(chartDiv, traces, layout).then((gd) => {
            storeColors(gd);
            buildLegend();
        });
    }

    // --- 存储 Plotly 分配的颜色 ---
    function storeColors(gd) {
        gd._fullData.forEach((plotTrace) => {
            const originalTrace = traces.find(t => t.name === plotTrace.name);
            if (originalTrace) {
                originalTrace.color = plotTrace.line?.color || plotTrace.marker?.color || '#000';
            }
        });
    }



    /**
     * 鼠标悬停事件处理
     * @param {object} eventData - Plotly 悬停事件数据
     */
    function onPlotHover(eventData) {
        if (!eventData.points) return;

        // 'hovermode: x unified' 确保我们总是能拿到 x 坐标
        const xval = eventData.points[0].x;

        // *** 新增：解决图表压缩问题的关键 ***
        // 1. 获取当前可见的 x 轴范围
        const xArray = eventData.points[0].data.x; // 获取当前点所在的 x 轴对象
        const xMidpoint = xArray[Math.floor(xArray.length / 2)]; // 计算可见范围的中点

        // 2. 判断鼠标是在图表左侧还是右侧
        const isRightSide = (xval > xMidpoint);

        // 3. 根据位置动态设置锚点和偏移量
        const xAnchor = isRightSide ? 'right' : 'left'; // 右侧悬停时，锚点在右
        const xOffset = isRightSide ? -10 : 10;         // 右侧悬停时，向左偏移 10px
        const textAlign = isRightSide ? 'right' : 'left'; // 文本对齐方式
        // *** 修改结束 ***


        const intersections = [];
        traces.forEach(trace => {
            if (trace.visible === true) { // 仅处理可见轨迹
                const yval = trace.y[eventData.points[0].pointIndex];
                if (yval !== null) { // 确保 xval 在该轨迹的范围内
                    intersections.push({
                        name: trace.name,
                        y: yval,
                        yaxis: trace.yaxis,
                        color: trace.color || '#000' // 使用存储的颜色
                    });
                }
            }
        });

        // 核心要求：根据 Y 值(交点的值)降序排列
        intersections.sort((a, b) => {
        const ay = a.y ?? -Infinity; // null/undefined -> -Infinity
        const by = b.y ?? -Infinity;
        return by - ay; // 降序：大 -> 小
        });

        // 1. 创建垂直线 (十字线)
        const shapes = [{
            type: 'line',
            xref: 'x',
            yref: 'paper', // 垂直跨越整个绘图区
            x0: xval,
            x1: xval,
            y0: 0,
            y1: 1,
            line: {
                color: 'rgba(100, 100, 100, 0.7)',
                width: 1,
                dash: 'dot'
            }
        }];

        // 2. 创建排序后的标注
        const annotations = [];
        let yPos = 0.95; // 从绘图区顶部 98% 的位置开始
        const yStep = 0.04 // 每个标注占用的垂直空间 (可调整)
        annotations.push({
            text: `<b>时间:</b> ${xval}`, // 假设 xval 精度到小数点后4位
            x: xval,
            y: 0.99, // 放在最顶部的 Y 位置 (paper 坐标)
            xref: 'x',
            yref: 'paper',
            align: textAlign,
            xanchor: xAnchor,
            ax: 0, // 不偏移
            yanchor: 'top',
            showarrow: false,
            font: {
                size: 14,
                color: '#333'
            },
            bgcolor: 'rgba(200, 200, 200, 1)',

        });
        intersections.forEach(item => {
            annotations.push({
                text: `<b>${item.name}</b>: ${item.y}`,
                x: xval,
                y: yPos,
                xref: 'x',
                yref: 'paper', // 标注的位置也相对于绘图区

                // *** 修改：应用动态值 ***
                align: textAlign,  // 文本对齐
                xanchor: xAnchor,  // 动态锚点
                ax: xOffset,     // 动态偏移
                // *** 修改结束 ***

                yanchor: 'top', // 锚点在文本顶部
                showarrow: false,
                bgcolor: 'rgba(255, 255, 255, 0.85)',
                // bordercolor: item.color,
                // borderwidth: 2,
                font: {
                    color: item.color,
                    size: 12
                },
                // ax: 10, // <- 已被上面的动态 ax 替换
            });
            yPos -= yStep; // 向下移动，为下一个标注腾出空间
        });

        // 使用 relayout 更新十字线和标注
        // 因为标注现在总是在绘图区内部，Plotly 不会再尝试自动缩放坐标轴
        Plotly.relayout('chart', { shapes: shapes, annotations: annotations });
    }

    /**
     * 鼠标移出图表区域事件处理
     */
    function onPlotUnhover() {
        // 清空十字线和标注
        Plotly.relayout('chart', { shapes: [], annotations: [] });
    }

    // --- 绑定图例区的拖放事件 ---
    [leftLegend, rightLegend].forEach(el => {
        el.addEventListener('dragover', allowDrop);
        el.addEventListener('drop', onDrop);
    });

    // --- 初始化 ---
    plotChart();
}