const typingElement = document.getElementById('text');
const texts = ["Hello, World!", "Welcome to My Website", "Enjoy Your Stay!"]; 
let textIndex = 0;
let charIndex = 0;
let isAdding = true;

function typeEffect() {
    const currentText = texts[textIndex];

    if (isAdding) {
        if (charIndex < currentText.length) {
            typingElement.textContent += currentText[charIndex];
            charIndex++;
        } else {
            isAdding = false;
            setTimeout(typeEffect, 1000); 
            return;
        }
    } else {
        if (charIndex > 0) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            isAdding = true;
            textIndex = (textIndex + 1) % texts.length; 
        }
    }

    setTimeout(typeEffect, 100); 
}

typeEffect();

let navbar = document.getElementById("navbar");
let icon =document.getElementById("manuIcon");
navbar.style.maxHeight="37.6px";
function toggleMenu(){
    if(navbar.style.maxHeight=="37.6px"){
        navbar.style.maxHeight="350px";
        icon.style.rotate="-90deg"
    } else {
        navbar.style.maxHeight="37.6px";
        icon.style.rotate="0deg"
    }
}