
function initAllMergeNodeForms() {

  const nodes = editor.drawflow.drawflow[editor.module]?.data;
  if (!nodes) return;

  Object.keys(nodes).forEach(nodeId => {

    const node = nodes[nodeId];
    const nodeData = node.data;

    // 只处理你关心的节点类型，比如 'merge'
    // if (node.name !== 'merge') return;

    // ✅ 1. 获取该节点的 DOM 元素
    const nodeEl = document.querySelector(`#node-${nodeId}`);
    if (!nodeEl) {
      console.warn(`⚠️ 节点 #node-${nodeId} 的 DOM 尚未渲染，跳过`);
      return;
    }

    // ✅ 2. 在该节点内部查找所有 df-direction 的 radio
    const radios = nodeEl.querySelectorAll('input[type="radio"]');
    
    if (radios.length === 0) {
      console.warn(`⚠️ 节点 #node-${nodeId} 未找到 radio，跳过`);
      return;
    }

    // ✅ 3. 根据 nodeData.direction 设置选中状态
    radios.forEach(radio => {
      // ✅ 只有 value 匹配时才选中
      radio.checked = radio.value === nodeData.direction;
    });

    // ✅ 4. 绑定 change 事件（实现 UI → Data）
    radios.forEach(radio => {
      // 防止重复绑定
      radio.removeEventListener('change', radioChangeHandler);

      function radioChangeHandler(e) {
        if (e.target.checked) {
          // 更新数据
          editor.updateNodeDataFromId(nodeId, { 
            ...nodeData, 
            direction: e.target.value 
          });
        }
      }

      radio.addEventListener('change', radioChangeHandler);
    });

    // ✅ 5. 同步其他字段，比如 input
    const pathInput = nodeEl.querySelector('input[df-path]');
    if (pathInput) {
      pathInput.value = nodeData.path || '';
      
      pathInput.removeEventListener('input', inputHandler);
      const inputHandler = (e) => {
        editor.updateNodeDataFromId(nodeId, { ...nodeData, path: e.target.value });
      };
      pathInput.addEventListener('input', inputHandler);
    }
  });


}