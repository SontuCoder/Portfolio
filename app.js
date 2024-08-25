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
            setTimeout(typeEffect, 1000); // Pause before removing
            return;
        }
    } else {
        if (charIndex > 0) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            isAdding = true;
            textIndex = (textIndex + 1) % texts.length; // Move to the next text
        }
    }

    setTimeout(typeEffect, 100); // Speed of typing/removing
}

// Start the typing effect
typeEffect();

// document.addEventListener('DOMContentLoaded', function() {
//     const radialBars = document.querySelectorAll('.radial-bar');

//     radialBars.forEach(bar => {
//         const percentage = bar.getAttribute('data-percentage');
//         const circle = bar.querySelector('.path');
//         const radius = circle.r.baseVal.value;
//         const circumference = 2 * Math.PI * radius;

//         circle.style.strokeDasharray = `${circumference} ${circumference}`;
//         circle.style.strokeDashoffset = circumference;

//         const offset = circumference - (percentage / 100) * circumference;
//         circle.style.strokeDashoffset = offset;

//         // Optional: Update progress text dynamically
//         const progressText = bar.querySelector('.progress');
//         progressText.textContent = `${percentage}%`;
//     });
// });
