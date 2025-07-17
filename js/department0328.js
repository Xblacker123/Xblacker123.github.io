// 部门表单验证
const departmentForm = document.getElementById('department-form');
if (departmentForm) {
  departmentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    const name = document.getElementById('department-name');
    const code = document.getElementById('department-code');
    const manager = document.getElementById('department-manager');
    const description = document.getElementById('department-description');
    const phone = document.getElementById('department-phone');
    const email = document.getElementById('department-email');
    const location = document.getElementById('department-location');
    
    // 验证部门名称
    if (!name.value.trim()) {
      utils.showError('department-name-error', '请输入部门名称');
      isValid = false;
    } else {
      utils.hideError('department-name-error');
    }
    
    // 验证部门代码
    if (!code.value.trim()) {
      utils.showError('department-code-error', '请输入部门代码');
      isValid = false;
    } else {
      utils.hideError('department-code-error');
    }
    
    // 验证部门主管
    if (!manager.value) {
      utils.showError('department-manager-error', '请选择部门主管');
      isValid = false;
    } else {
      utils.hideError('department-manager-error');
    }
    
    // 验证部门描述
    if (!description.value.trim()) {
      utils.showError('department-description-error', '请输入部门描述');
      isValid = false;
    } else {
      utils.hideError('department-description-error');
    }
    
    // 验证联系电话
    if (!utils.validatePhone(phone.value)) {
      utils.showError('department-phone-error', '请输入有效的联系电话');
      isValid = false;
    } else {
      utils.hideError('department-phone-error');
    }
    
    // 验证联系邮箱
    if (!utils.validateEmail(email.value)) {
      utils.showError('department-email-error', '请输入有效的联系邮箱');
      isValid = false;
    } else {
      utils.hideError('department-email-error');
    }
    
    // 验证办公地点
    if (!location.value.trim()) {
      utils.showError('department-location-error', '请输入办公地点');
      isValid = false;
    } else {
      utils.hideError('department-location-error');
    }
    
    if (isValid) {
      // 保存成功，显示成功消息
      alert('部门信息保存成功！');
      // 在实际应用中，这里应该重置表单或更新列表
    }
  });
  
  // 添加部门按钮事件
  const addDepartmentBtn = document.getElementById('add-department-btn');
  if (addDepartmentBtn) {
    addDepartmentBtn.addEventListener('click', function() {
      departmentForm.reset();
      departmentForm.scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  // 表格操作按钮事件
  document.querySelectorAll('.action-edit').forEach(btn => {
    btn.addEventListener('click', function() {
      const row = this.closest('tr');
      const cells = row.cells;
      
      // 填充表单
      document.getElementById('department-name').value = cells[1].textContent;
      document.getElementById('department-code').value = cells[0].textContent;
      document.getElementById('department-manager').value = '1'; // 模拟选择
      document.getElementById('department-phone').value = '13800138000';
      document.getElementById('department-email').value = 'hr@company.com';
      document.getElementById('department-location').value = 'A座3楼';
      
      // 滚动到表单
      departmentForm.scrollIntoView({ behavior: 'smooth' });
    });
  });
}