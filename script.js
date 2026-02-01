const buttonTheme = document.getElementById('themeChange');
const body = document.body;

buttonTheme.addEventListener('click', () => {
    body.classList.toggle('darkMode');
});