// 登录表单验证
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    const username = document.getElementById('login-username');
    const password = document.getElementById('login-password');
    const captcha = document.getElementById('captcha');
    
    // 验证用户名
    if (!username.value.trim()) {
      utils.showError('login-username-error', '请输入用户名');
      isValid = false;
    } else {
      utils.hideError('login-username-error');
    }
    
    // 验证密码
    if (!password.value.trim()) {
      utils.showError('login-password-error', '请输入密码');
      isValid = false;
    } else {
      utils.hideError('login-password-error');
    }
    
    // 验证验证码
    if (!captcha.value.trim()) {
      utils.showError('captcha-error', '请输入验证码');
      isValid = false;
    } else {
      utils.hideError('captcha-error');
    }
    
    if (isValid) {
      // 登录成功，跳转到主界面
      alert('登录成功！正在跳转...');
      window.location.href = 'index.html';
    }
  });
}

// 注册表单验证
const registerForm = document.getElementById('register-form');
if (registerForm) {
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    const firstName = document.getElementById('register-firstname');
    const lastName = document.getElementById('register-lastname');
    const email = document.getElementById('register-email');
    const phone = document.getElementById('register-phone');
    const password = document.getElementById('register-password');
    const confirmPassword = document.getElementById('register-confirm-password');
    const terms = document.getElementById('terms');
    
    // 验证名字
    if (!firstName.value.trim()) {
      utils.showError('register-firstname-error', '请输入名字');
      isValid = false;
    } else {
      utils.hideError('register-firstname-error');
    }
    
    // 验证姓氏
    if (!lastName.value.trim()) {
      utils.showError('register-lastname-error', '请输入姓氏');
      isValid = false;
    } else {
      utils.hideError('register-lastname-error');
    }
    
    // 验证邮箱格式
    if (!utils.validateEmail(email.value)) {
      utils.showError('register-email-error', '请输入有效的电子邮箱');
      isValid = false;
    } else {
      utils.hideError('register-email-error');
    }
    
    // 验证手机格式
    if (!utils.validatePhone(phone.value)) {
      utils.showError('register-phone-error', '请输入有效的手机号码');
      isValid = false;
    } else {
      utils.hideError('register-phone-error');
    }
    
    // 验证密码强度
    if (!utils.validatePassword(password.value)) {
      utils.showError('register-password-error', '密码长度至少为8位，包含字母和数字');
      isValid = false;
    } else {
      utils.hideError('register-password-error');
    }
    
    // 验证确认密码
    if (password.value !== confirmPassword.value) {
      utils.showError('register-confirm-password-error', '两次输入的密码不一致');
      isValid = false;
    } else {
      utils.hideError('register-confirm-password-error');
    }
    
    // 验证条款
    if (!terms.checked) {
      utils.showError('terms-error', '请接受服务条款');
      isValid = false;
    } else {
      utils.hideError('terms-error');
    }
    
    if (isValid) {
      // 注册成功，显示成功消息
      alert('注册成功！请登录您的账户。');
      window.location.href = 'login.html';
    }
  });
}