// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function () {
    
    // Display an alert when the page loads
    alert("Welcome to my website!");

    // Select a button and add a click event listener
    const button = document.querySelector("#myButton");
    
    if (button) {
        button.addEventListener("click", function () {
            alert("Button clicked!");
        });
    }

    // Example: Change text content when clicking a button
    const textElement = document.querySelector("#text");
    
    if (textElement) {
        button.addEventListener("click", function () {
            textElement.textContent = "You clicked the button!";
        });
    }

    // Example: Toggle a CSS class on an element
    const box = document.querySelector("#box");
    
    if (box) {
        box.addEventListener("mouseover", function () {
            box.classList.toggle("highlight");
        });
    }

    // Example: Log a message to the console
    console.log("JavaScript is working!");
});
