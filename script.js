document.addEventListener('DOMContentLoaded', () => {
    // Ejecuta toda la lógica una vez que el DOM esté completamente cargado

    // Saludo dinámico según la hora del día
    const greetingElement = document.getElementById('welcome');
    const hour = new Date().getHours();
    let greetingText = 'Bienvenido';
    
    if (hour < 12) greetingText = 'Buenos días';
    else if (hour < 20) greetingText = 'Buenas tardes';
    else greetingText = 'Buenas noches';
    
    greetingElement.innerText = `${greetingText} Salva ┗(^o^)┓三`;

    // Modo oscuro
    const buttonTheme = document.getElementById('themeChange');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        body.classList.add('darkMode');
    }
    
    buttonTheme.addEventListener('click', () => {
        body.classList.toggle('darkMode');
        
        if (body.classList.contains('darkMode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Aumentar/Disminuir tamaño del texto
    const increaseBtn = document.getElementById('increaseText');
    const decreaseBtn = document.getElementById('decreaseText');
    let currentSize = 16; // Tamaño base definido en el CSS

    increaseBtn.addEventListener('click', () => {
        if(currentSize < 24) {
            currentSize += 2;
            body.style.fontSize = currentSize + 'px';
        }
    });

    decreaseBtn.addEventListener('click', () => {
        if (currentSize > 12) {
            currentSize -= 2;
            body.style.fontSize = currentSize + 'px';
        }
    });
});