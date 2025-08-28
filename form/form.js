// 获取弹框元素
const formModal = document.getElementById('formModal');
const closeButton = formModal.querySelector('.close-button');
console.log("关闭"+closeButton);
const submitButton = formModal.querySelector('.btn-submit');
console.log("提交"+closeButton);
const dynamicNodeForm = document.getElementById('dynamicNodeForm');
let currentNodeId = null;

// 监听 Drawflow 节点的双击事件
editor.on('contextmenu', function(id) {

    
    formModal.style.display = 'flex';
    
    
    // 阻止浏览器默认的右键菜单
    event.preventDefault();

    // 查找事件源是否为 Drawflow 节点
    const targetNode = event.target.closest('.drawflow-node');
    
    if (targetNode) {
        // 获取节点的 ID
        const nodeId = targetNode.getAttribute('id').substring(5);
        currentNodeId = nodeId;
        console.log('右击了节点，ID为:', nodeId);
        
        // 获取节点数据并填充表单
        const nodeData = editor.getNodeFromId(nodeId);
        const formData = nodeData.data ||[];
        // 动态生成表单
        let formHtml = '';
        if (Array.isArray(formData)) {
            formData.forEach(field => {
                formHtml += createFormElement(field);
            });
        }
        dynamicNodeForm.innerHTML = formHtml;
        
        // 显示弹框
        formModal.style.display = 'flex';
    }


});



// 监听表单提交事件
submitButton.addEventListener('click', function(e) {
    e.preventDefault();

    if (currentNodeId) {
        const nodeData = editor.getNodeFromId(currentNodeId);
        const oldFormData = nodeData.data;
        const newFormData = [];

        // 遍历旧数据结构，从表单中获取新值
        oldFormData.forEach(field => {
            let newValue;
            switch (field.type) {
                case 'text':
                case 'textarea':
                    newValue = document.getElementById(field.key).value;
                    break;
                case 'select':
                    newValue = document.getElementById(field.key).value;
                    break;
                case 'radio':
                    newValue = document.querySelector(`input[name="${field.key}"]:checked`).value;
                    break;
            }

            // 创建新的字段对象并添加到数组
            newFormData.push({ ...field, value: newValue });
        });
        console.log('新表单数据:', newFormData);
        // 更新节点数据
        editor.updateNodeDataFromId(currentNodeId, newFormData);

        // 更新节点在画布上显示的 HTML
        const nodeElement = document.querySelector(`.drawflow-node[id="${currentNodeId}"] .drawflow_content_node`);
        if (nodeElement) {
            // 这里可以自定义显示内容，例如只显示任务名称
            const taskNameField = newFormData.find(f => f.key === 'taskName');
            nodeElement.innerHTML = `<div>${taskNameField ? taskNameField.value : '未知节点'}</div>`;
        }

        formModal.style.display = 'none';
        currentNodeId = null;

    }

    // 隐藏弹框
    formModal.style.display = 'none';
    currentNodeId = null;




});


// 关闭弹窗
closeButton.addEventListener('click', function() {
    formModal.style.display = 'none';
    currentNodeId = null;
});


// 动态表单
function createFormElement(field) {
    let element = '';
    // 创建 Label
    const label = `<label for="${field.key}">${field.name}:</label>`;

    // 根据类型创建不同的控件
    switch (field.type) {
        case 'text':
            element = `<input type="text" id="${field.key}" value="${field.value}" class="form-input">`;
            break;
        case 'textarea':
            element = `<textarea id="${field.key}" class="form-textarea">${field.value}</textarea>`;
            break;
        case 'select':
            let optionsHtml = field.options.map(option =>
                `<option value="${option}" ${option === field.value ? 'selected' : ''}>${option}</option>`
            ).join('');
            element = `<select  id="${field.key}" class="form-select">${optionsHtml}</select>`;
            break;
        case 'radio':
            let radioHtml = field.options.map(option =>
                `<input type="radio" id="${field.key}-${option}" name="${field.key}" value="${option}" ${option === field.value ? 'checked' : ''}><label for="${field.key}-${option}">${option}</label>`
            ).join('');
            element = `<div class="radio-group">${radioHtml}</div>`;
            break;
        default:
            element = ''; // 未知类型
    }
    return `<div>${label}${element}</div>`;
}    




