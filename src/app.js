const gradientBox = document.querySelector('.gradient-box');
const selectMenu = document.querySelector('.select-box select');
const colorInput = document.querySelectorAll('.colors input');
const textarea = document.querySelector('textarea')

const generateGradient = () => {
    const gradient = `linear-gradient(to top left,(${selectMenu.value}, ${colorInput[0].value}, ${colorInput[1].value})`;
    gradientBox.style.background = gradient;
    textarea.value = `background: ${gradient};`;
}

colorInput.forEach(input => {
    input.addEventListener('input', generateGradient)
});

selectMenu.addEventListener('change', generateGradient);