// 获取返回顶部按钮
var backToTop = document.querySelector('.back-to-top');

// 监听页面滚动事件
window.addEventListener('scroll', function() {
    // 当页面滚动超过200px时，显示返回顶部按钮，否则隐藏
    if (window.pageYOffset > 200) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// 监听返回顶部按钮的点击事件
backToTop.addEventListener('click', function(e) {
    e.preventDefault();
    // 平滑滚动到页面顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});