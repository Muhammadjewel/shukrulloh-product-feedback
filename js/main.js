const sidebarBtn = document.querySelector('.site-header__sidebar');
const sidebarCloseBtn = document.querySelector('.site-header__sidebar--close');
const siteWrapper = document.querySelector('.site-header-feedbacks-wrapper');



sidebarCloseBtn.addEventListener('click', function() {
	siteWrapper.classList.remove('sidebar-open');
	console.log('open');
});


sidebarBtn.addEventListener('click', function() {
	siteWrapper.classList.add('sidebar-open');
	console.log('open');
});
