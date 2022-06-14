const sidebarBtn = document.querySelector('.sidebar-open-btn');
const siteWrapper = document.querySelector('.site-header');
const siteNav = document.querySelector('.page__body');


sidebarBtn.addEventListener('click', function() {
	siteWrapper.classList.toggle('sidebar-open');
	siteNav.classList.toggle('page__body--sitenav-open');
});
