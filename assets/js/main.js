/* Menu de navegacion hamburguesa*/

const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('nav ul')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navList.classList.toggle('active')
})

/* Dark - Light Mode */

const darkModeButton = document.getElementById('darkMode')
const body = document.body

const enableDarkMode = () => {
    body.classList.add('dark-mode')
}

const disableDarkMode = () => {
    body.classList.remove('dark-mode')
}

darkModeButton.addEventListener('change', (event) => {
    darkModeButton.checked ? enableDarkMode() : disableDarkMode()
})
