const navBar = document.querySelector('.navbar')
const navMobile = document.querySelector('.navbar--mobile')
const navBtn = document.querySelector('.hamburger')
const allNavItems = document.querySelectorAll('.navbar__item')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('navbar--active')
}

allNavItems.forEach(item => {
	item.addEventListener('click', () => {
		navMobile.classList.remove('navbar--active')
		navBtn.classList.remove('is-active')
	})
})

function addShadow() {
	if (window.scrollY >= 170) {
		navBar.classList.add('navbar--background')
	} else {
		navBar.classList.remove('navbar--background')
	}
	if (navMobile.classList.contains('navbar--active')) {
		setTimeout(function () {
			navBar.classList.remove('navbar--background')
		}, 100)
	}
}

navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', addShadow)
window.addEventListener('click', addShadow)

// const handleCurrentYear = () => {
// 	const year = new Date().getFullYear()
// 	footerYear.innerText = year
// }
// handleCurrentYear()
