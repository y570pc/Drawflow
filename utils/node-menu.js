const closePreviewButton = previewModal.querySelector('.close-button');
// === 全局函数：为单个节点添加按钮 ===
function addButtonsToNode(nodeId) {
  const nodeElement = document.getElementById('node-' + nodeId);
  if (!nodeElement) return;

  const titleBox = nodeElement.querySelector('.title-box');
  if (!titleBox) return;

  // 防止重复添加
  if (titleBox.querySelector('.df-node-actions')) {
    return;
  }

  // 按钮 HTML
  const actionsHTML = `
    <div class="df-node-actions" style="float: right; display: flex; gap: 4px;">
      <button class="df-btn-run" title="Run" style="font-size:12px;padding:0 6px;height:20px;">▶</button>
      <button class="df-btn-preview" title="Preview" style="font-size:12px;padding:0 6px;height:20px;">👁</button>
      <button class="df-btn-download" title="Download" style="font-size:12px;padding:0 6px;height:20px;">↓</button>
      <button class="df-btn-more" title="More" style="font-size:12px;padding:0 6px;height:20px;">⋯</button>
      <button class="df-btn-delete" title="Close" style="font-size:12px;padding:0 6px;height:20px;">×</button>
    </div>
  `;

  titleBox.insertAdjacentHTML('afterend', actionsHTML);

  const btnRun = nodeElement.querySelector('.df-btn-run');
  const btnPreview = nodeElement.querySelector('.df-btn-preview');
  const btnDownload = nodeElement.querySelector('.df-btn-download');
  const btnClose = nodeElement.querySelector('.df-btn-delete');
  const btnMore = nodeElement.querySelector('.df-btn-more');

  // 绑定事件（注意：使用 nodeId 闭包）
  btnRun.addEventListener('click', (e) => {
    e.stopPropagation();
    handleRunNode(nodeId);
  });

  btnPreview.addEventListener('click', (e) => {
    e.stopPropagation();
    handlePreviewNode(nodeId);
  });

  btnDownload.addEventListener('click', (e) => {
    e.stopPropagation();
    fetchDataAndExport(nodeId);
  });



  btnClose.addEventListener('click', (e) => {
    e.stopPropagation();
    editor.removeNodeId("node-" + nodeId);
  });

  btnMore.addEventListener('click', (e) => {
    e.stopPropagation();
    handleMoreNode(nodeId);
  });
}

// === 处理函数：运行、预览、更多 ===
function handleRunNode(nodeId) {
  nodeIdList = Object.keys(editor.drawflow.drawflow.Home.data);
  // 初始化一个空对象，用于合并所有 data
  const mergedData = {};

  // 遍历 nodeId 列表
  nodeIdList.forEach(id => {
    const nodeData = editor.getNodeFromId(id);

    // 检查节点是否存在且 data 是普通对象（非数组、非 null）
    if (nodeData && nodeData.data && typeof nodeData.data === 'object' && !Array.isArray(nodeData.data)) {
      // 使用 Object.assign 扁平合并，不新增层级
      Object.assign(mergedData, nodeData.data);
    } else {
      console.warn(`Node with ID ${id} has invalid or missing data`);
    }
  });

  const nodeData = editor.getNodeFromId(nodeId);
  console.log(nodeData)
  if (nodeData.name === "figure") {
    parseWorkSheet(nodeData.data)
  } else {
    const payload = {
      name: nodeData.name,
      data: mergedData,
    };

    fetch('http://localhost:5000/api/rte/run', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => {
        if (!res.ok) {
          // 如果状态码不是 2xx，视为失败
          return res.json().then(errData => {
            throw new Error(errData.error || 'Unknown error');
          });
        }
        return res.json();  // 成功则解析 JSON
      })
      .then(data => {
        // 这里才是真正的成功
        console.log('Success:', data);
        alert('✅ 【' + nodeData.name + '】步骤计算完成！');
      })
      .catch(err => {
        // 捕获网络错误或上面 throw 的错误
        console.error('Failed:', err.message);
        alert('❌ 执行失败：' + err.message);
      });
  }

}



function handlePreviewNode(nodeId) {
  const nodeData = editor.getNodeFromId(nodeId);
  const previewModal = document.getElementById('previewModal');
  const container = document.getElementById('preview-container');
  container.innerHTML = ''; // 清空
  previewModal.classList.add('show');

  if (nodeData.name === 'figure') {

    container.appendChild(createLineContainer());

    createInteractiveChart(window.chartData, 'chart', 'left-axis-legend', 'right-axis-legend', 'search-input', nodeData.data.title || '折线图');
  } else {
    // 创建并插入自定义组件
    const myComponent = document.createElement('my-compiled-component');
    container.appendChild(myComponent);
    // 假设 nodeData 有个字段叫 stepName
    const nodeName = nodeData.name || 'default';

    // 调用自定义方法传参
    myComponent.setStepName(nodeName);
  }

}


// 关闭弹窗

closePreviewButton.addEventListener('click', function () {
  // previewModal.style.display = 'none';
  previewModal.classList.remove('show');
  currentNodeId = null;
});

function handleMoreNode(nodeId) {
  console.log('More actions for node:', nodeId);
  createForm(nodeId);
}


function createLineContainer() {
  // 创建最外层 div#line
  const lineDiv = document.createElement('div');
  lineDiv.id = 'line';

  // 创建 chart 容器
  const chartDiv = document.createElement('div');
  chartDiv.id = 'chart';
  lineDiv.appendChild(chartDiv);

  // 创建图例容器 #legend-container
  const legendContainer = document.createElement('div');
  legendContainer.id = 'legend-container';

  // 1. 添加 "筛选列数据" 标题
  const filterLabel = document.createElement('strong');
  filterLabel.textContent = '筛选列数据';
  legendContainer.appendChild(filterLabel);

  // 2. 搜索输入区
  const searchSection = document.createElement('div');
  searchSection.className = 'legend-section search-section';

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.id = 'search-input';
  searchInput.placeholder = '搜索系列...';

  searchSection.appendChild(searchInput);
  legendContainer.appendChild(searchSection);

  // 3. 左Y轴标题
  const leftLabel = document.createElement('strong');
  leftLabel.textContent = '左Y轴数据';
  legendContainer.appendChild(leftLabel);

  // 4. 左Y轴图例区
  const leftLegend = document.createElement('div');
  leftLegend.className = 'legend-section top';
  leftLegend.id = 'left-axis-legend';
  legendContainer.appendChild(leftLegend);

  // 5. 右Y轴标题
  const rightLabel = document.createElement('strong');
  rightLabel.textContent = '右Y轴数据';
  legendContainer.appendChild(rightLabel);

  // 6. 右Y轴图例区
  const rightLegend = document.createElement('div');
  rightLegend.className = 'legend-section bottom';
  rightLegend.id = 'right-axis-legend';
  legendContainer.appendChild(rightLegend);

  // 将图例容器加入 lineDiv
  lineDiv.appendChild(legendContainer);

  return lineDiv; // 返回构建好的 DOM 节点
}