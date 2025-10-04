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
      <button class="df-btn-delete" title="Close" style="font-size:12px;padding:0 6px;height:20px;">×</button>
      <button class="df-btn-more" title="More" style="font-size:12px;padding:0 6px;height:20px;">⋯</button>
    </div>
  `;

  titleBox.insertAdjacentHTML('afterend', actionsHTML);

  const btnRun = nodeElement.querySelector('.df-btn-run');
  const btnPreview = nodeElement.querySelector('.df-btn-preview');
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

  btnClose.addEventListener('click', (e) => {
    e.stopPropagation();
    editor.removeNodeId("node-"+nodeId);
  });

  btnMore.addEventListener('click', (e) => {
    e.stopPropagation();
    handleMoreNode(nodeId);
  });
}

// === 处理函数：运行、预览、更多 ===
function handleRunNode(nodeId) {
  const nodeData = editor.getNodeFromId(nodeId);
  const payload = {
    id: nodeId,
    type: nodeData.name,
    data: nodeData.data,
    pos_x: nodeData.pos_x,
    pos_y: nodeData.pos_y
  };

  fetch('/api/nodes/run', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  .then(res => res.json())
  .then(data => {
    console.log('Executed:', data);
    alert('✅ Node ' + nodeId + ' executed');
  })
  .catch(err => {
    console.error('Failed:', err);
    alert('❌ Execution failed');
  });
}

function handlePreviewNode(nodeId) {
  const nodeData = editor.getNodeFromId(nodeId);
  alert(`🔍 Preview:\n${JSON.stringify(nodeData.data, null, 2)}`);
}

function handleMoreNode(nodeId) {
  console.log('More actions for node:', nodeId);
  createForm(nodeId);
}