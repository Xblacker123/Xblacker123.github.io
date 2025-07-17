// 通用工具函数
const utils = {
  // 显示错误消息
  showError: (elementId, message) => {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
  },
  
  // 隐藏错误消息
  hideError: (elementId) => {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
      errorElement.style.display = 'none';
    }
  },
  
  // 验证手机号格式
  validatePhone: (phone) => {
    const phoneRegex = /^1[3-9]\d{9}$/;
    return phoneRegex.test(phone);
  },
  
  // 验证邮箱格式
  validateEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  
  // 验证密码强度
  validatePassword: (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  },
  
  // 初始化表格行点击事件
  initTableRowEvents: () => {
    document.querySelectorAll('tbody tr').forEach(row => {
      row.addEventListener('click', function(e) {
        if(e.target.tagName === 'BUTTON') return;
        alert('查看详情: ' + this.cells[0].textContent);
      });
    });
  },
  
  // 初始化表格操作按钮
  initTableActionButtons: () => {
    // 编辑按钮事件
    document.querySelectorAll('.action-edit').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        alert('编辑功能被触发');
      });
    });
    
    // 删除按钮事件
    document.querySelectorAll('.action-delete').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        if(confirm('确定要删除这条记录吗？')) {
          this.closest('tr').remove();
        }
      });
    });
  },
  
  // 初始化分页组件
  initPagination: () => {
    document.querySelectorAll('.page-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 移除当前活动状态
        document.querySelector('.page-link.active')?.classList.remove('active');
        
        // 设置当前活动状态
        this.classList.add('active');
        
        // 在实际应用中，这里会加载对应页面的数据
        console.log('加载第 ' + this.textContent + ' 页数据');
      });
    });
  },
  
  // 初始化搜索功能
  initSearch: () => {
    const searchButtons = document.querySelectorAll('.search-container .btn');
    searchButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const container = this.closest('.search-container');
        const input = container.querySelector('input');
        const searchTerm = input.value.toLowerCase();
        const table = container.closest('.section').querySelector('table');
        
        if (table) {
          const tableRows = table.querySelectorAll('tbody tr');
          
          tableRows.forEach(row => {
            const searchableText = Array.from(row.cells)
              .map(cell => cell.textContent.toLowerCase())
              .join(' ');
            
            if (searchableText.includes(searchTerm)) {
              row.style.display = '';
            } else {
              row.style.display = 'none';
            }
          });
        }
      });
    });
  },
  
  // 初始化页面加载效果
  initPageLoad: () => {
    // 添加渐入动画
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.classList.add('fade-in');
    }
  }
};

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
  utils.initTableRowEvents();
  utils.initTableActionButtons();
  utils.initPagination();
  utils.initSearch();
  utils.initPageLoad();
  
  // 初始化卡片悬停效果
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 12px 20px rgba(0,0,0,0.12)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });
});