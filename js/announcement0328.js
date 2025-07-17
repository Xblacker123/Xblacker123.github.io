// 公告表单验证
const announcementForm = document.getElementById('announcement-form');
if (announcementForm) {
  announcementForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    const title = document.getElementById('announcement-title');
    const type = document.getElementById('announcement-type');
    const department = document.getElementById('announcement-department');
    const content = document.getElementById('announcement-content');
    const startDate = document.getElementById('announcement-start');
    const endDate = document.getElementById('announcement-end');
    
    // 验证标题
    if (!title.value.trim()) {
      utils.showError('announcement-title-error', '请输入公告标题');
      isValid = false;
    } else {
      utils.hideError('announcement-title-error');
    }
    
    // 验证类型
    if (!type.value) {
      utils.showError('announcement-type-error', '请选择公告类型');
      isValid = false;
    } else {
      utils.hideError('announcement-type-error');
    }
    
    // 验证部门
    if (!department.value) {
      utils.showError('announcement-department-error', '请选择发布部门');
      isValid = false;
    } else {
      utils.hideError('announcement-department-error');
    }
    
    // 验证内容
    if (!content.value.trim()) {
      utils.showError('announcement-content-error', '请输入公告内容');
      isValid = false;
    } else {
      utils.hideError('announcement-content-error');
    }
    
    // 验证开始时间
    if (!startDate.value) {
      utils.showError('announcement-start-error', '请选择生效时间');
      isValid = false;
    } else {
      utils.hideError('announcement-start-error');
    }
    
    // 验证结束时间
    if (!endDate.value) {
      utils.showError('announcement-end-error', '请选择过期时间');
      isValid = false;
    } else {
      utils.hideError('announcement-end-error');
    }
    
    if (isValid) {
      // 发布成功，显示成功消息
      alert('公告发布成功！');
      window.location.href = 'index.html';
    }
  });
  
  // 取消按钮事件
  const cancelButton = document.querySelector('.btn-light');
  if (cancelButton) {
    cancelButton.addEventListener('click', function() {
      if(confirm('确定要取消发布吗？所有输入内容将被清空。')) {
        announcementForm.reset();
      }
    });
  }
}