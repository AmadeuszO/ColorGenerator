const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInput = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshButton = document.querySelector(".refresh");
const copyButton = document.querySelector(".copy");


const randomColor = () => {
    // Randomowe kolory, wroci pożniej do tego !
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}
const generateGradient = (isRandom) => {
    if(isRandom) {
        colorInput[0].value = randomColor();
        colorInput[1].value = randomColor();
    }
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInput[0].value}, ${colorInput[1].value})`;
    gradientBox.style.background = gradient;
    textarea.value = `background: ${gradient};`;
}
const copyCode = () => {
    navigator.clipboard.writeText(textarea.value);
    copyButton.innerText = "Code Copied";
    setTimeout(() => copyButton.innerText = "Copy Code", 1600);
}
colorInput.forEach(input => {
    input.addEventListener("input", () => generateGradient(false));
});
selectMenu.addEventListener("change", () => generateGradient(false));
refreshButton.addEventListener("click", () => generateGradient(true));
copyButton.addEventListener("click", copyCode);
