// 存储加载的节点配置
let NODE_CONFIG = null;

// 异步加载配置
async function loadNodeConfig() {
  try {
    const response = await fetch('nodes-config.json');
    NODE_CONFIG = await response.json();
  } catch (err) {
    console.error('Failed to load node config:', err);
    NODE_CONFIG = { groups: [] };
  }
}



// 扩展 addNodeToDrawFlow 以支持通用化
function addNodeToDrawFlow(name, pos_x, pos_y) {
  if (editor.editor_mode === 'fixed') return false;
  if (!NODE_CONFIG) {
    console.warn('Node config not loaded yet!');
    return;
  }

  // 坐标转换（不变）
  pos_x = pos_x * (editor.precanvas.clientWidth / (editor.precanvas.clientWidth * editor.zoom)) -
    (editor.precanvas.getBoundingClientRect().x * (editor.precanvas.clientWidth / (editor.precanvas.clientWidth * editor.zoom)));
  pos_y = pos_y * (editor.precanvas.clientHeight / (editor.precanvas.clientHeight * editor.zoom)) -
    (editor.precanvas.getBoundingClientRect().y * (editor.precanvas.clientHeight / (editor.precanvas.clientHeight * editor.zoom)));

  // 从所有分组中查找匹配的节点
  let nodeDef = null;
  for (const group of NODE_CONFIG.groups) {
    nodeDef = group.nodes.find(n => n['data-node'] === name);
    if (nodeDef) break;
  }

  if (!nodeDef) {
    console.warn(`Node definition not found: ${name}`);
    return;
  }

  // 使用配置中的参数创建节点
  editor.addNode(
    name,                         // node type
    nodeDef.inputs || 0,          // 输入数
    nodeDef.outputs || 0,         // 输出数
    pos_x,
    pos_y,
    name,                         // category
    nodeDef.data || {},           // 默认数据
    nodeDef.html                  // HTML 模板
  );
}


async function loadSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!NODE_CONFIG) {
    console.warn('Node config not loaded');
    return;
  }

  const container = document.createElement('div');
  container.className = 'col';

  NODE_CONFIG.groups.forEach(group => {
    const groupEl = document.createElement('div');
    groupEl.className = 'node-group';

    const toggle = document.createElement('div');
    toggle.className = 'group-toggle';
    toggle.innerHTML = `
      <i class="${group.icon}"></i>
      <span>${group.name}</span>
      <i class="fas fa-chevron-down group-arrow ${group.open ? 'open' : ''}"></i>
    `;
    groupEl.appendChild(toggle);

    const nodesContainer = document.createElement('div');
    nodesContainer.className = 'group-nodes';
    nodesContainer.style.display = group.open ? 'block' : 'none';

    group.nodes.forEach(node => {
      const nodeEl = document.createElement('div');
      nodeEl.className = 'drag-drawflow';
      nodeEl.draggable = true;
      nodeEl.setAttribute('data-node', node['data-node']);
      nodeEl.setAttribute('ondragstart', 'drag(event)');
      nodeEl.innerHTML = `<i class="${node.icon}"></i><span> ${node.label}</span>`;
      nodesContainer.appendChild(nodeEl);
    });

    groupEl.appendChild(nodesContainer);
    container.appendChild(groupEl);
  });

  sidebar.innerHTML = '';
  sidebar.appendChild(container);

  // 绑定折叠事件
  document.querySelectorAll('.group-toggle').forEach(toggle => {
    toggle.addEventListener('click', function () {
      const nodes = this.nextElementSibling;
      const arrow = this.querySelector('.group-arrow');
      nodes.style.display = nodes.style.display === 'none' ? 'block' : 'none';
      arrow.classList.toggle('open');
    });
  });
}

// 初始化时加载
window.addEventListener('DOMContentLoaded', async () => {
  await loadNodeConfig();
  await loadSidebar(); // 生成侧边栏
});