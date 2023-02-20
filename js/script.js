const navBar = document.querySelector('.navbar')
const navMobile = document.querySelector('.mobile')
const navBtn = document.querySelector('.hamburger')
const allNavItems = document.querySelectorAll('.navbar-item')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('mobile--active')
}

allNavItems.forEach(item => {
	item.addEventListener('click', () => {
		navMobile.classList.remove('mobile--active')
		navBtn.classList.remove('is-active')
	})
})

function addShadow() {
	if (window.scrollY >= 150) {
		navBar.classList.add('nav-background')
	} else {
		navBar.classList.remove('nav-background')
	}
}

navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', addShadow)
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
