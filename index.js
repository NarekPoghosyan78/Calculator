const display = document.querySelector('.display');
const imagebox = document.querySelector('.imageBox');
const linkCss = document.querySelector('.cssLink');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');
const darkLightBtn = document.querySelector('.darkLightBtn');
display.value = '';

if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
    darkLightBtn.src = './images/full-moon.png'
}

imagebox.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark'
        ? 'light'
        : 'dark';

    if (newTheme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        darkLightBtn.src = './images/sun.png'
    } else {
        root.removeAttribute('data-theme');
        darkLightBtn.src = './images/full-moon.png'
    }

    localStorage.setItem('theme', newTheme);
});

function addNum(element) {
    if (display.value !== '0') {
        display.value += element.innerHTML
        displaySize()
    } else {
        display.value = element.innerHTML
    }
}

function displaySize() {
    const numChar = display.value.length
    if (numChar < 10) {
        display.style.fontSize = '70px';
    } else if (numChar >= 10 && numChar < 14) {
        display.style.fontSize = '50px'
    } else if (numChar >= 14 && numChar <= 16) {
        display.style.fontSize = '40px'
    }
}
function addSym(element) {
    const lastItem = display
        .value
        .at(-1);
    if (Number(lastItem) || lastItem == ')') {
        display.value += element
    }
}
function result() {
    if (!display.value) {
        display.value = '0'
    }
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error";
    }
}
function deletelastItem() {
    display.value = display
        .value
        .slice(0, -1);
}
function clearDisplay() {
    display.value = ''
}


