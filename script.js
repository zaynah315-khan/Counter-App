 
 // Getting HTML Elements
let counterTextNode = document.getElementById("counter-display");
let buttonNode = document.getElementById("my-btn");
let messageNode = document.getElementById("special-message");

// Counter Value
let count = 0;

// Button Click Event
buttonNode.addEventListener("click", function () {

    // Increase Counter
    count = count + 1;

    // Display Counter
    counterTextNode.innerText = count;

    // Counter Pop Animation
    counterTextNode.style.transform = "scale(1.15)";

    setTimeout(function () {
        counterTextNode.style.transform = "scale(1)";
    }, 150);

    // Check Special Numbers
    if (count === 6 || count === 12 || count === 14) {

        // Change Counter Color
        counterTextNode.style.color = "#E53935";

        // Show Message
        messageNode.innerHTML =
            "🎉 Congratulations! <br><strong>" +
            count +
            "</strong> is a <strong>Special Number!</strong>";

        // Activate Message Box
        messageNode.classList.add("active");

    } else {

        // Reset Counter Color
        counterTextNode.style.color = "#222";

        // Default Message
        messageNode.innerHTML =
            "✨ Keep counting to discover the special numbers.";

        // Remove Active Style
        messageNode.classList.remove("active");

    }

});// Remove highlight from all special numbers
document.getElementById("num6").classList.remove("active-number");
document.getElementById("num12").classList.remove("active-number");
document.getElementById("num14").classList.remove("active-number");

// Highlight the current special number
if (count === 6) {
    document.getElementById("num6").classList.add("active-number");
}

if (count === 12) {
    document.getElementById("num12").classList.add("active-number");
}

if (count === 14) {
    document.getElementById("num14").classList.add("active-number");
}