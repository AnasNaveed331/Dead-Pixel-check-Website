// Select the body and html elements
const html = document.querySelector(".color_html");

// Define an array of colors to toggle through
const colors = ["blue", "black", "white"];
let currentColorIndex = 0; // Initial color index

// Function to change the background color
function changeBackgroundColor() {
    const newColor = colors[currentColorIndex];

    // Update background color and text color
    const allElements = document.querySelectorAll("*");
    allElements.forEach(element => {
        element.style.backgroundColor = newColor;
        element.style.color = newColor === "white" ? "black" : "white"; // Ensure text is readable
    });

    // Show visual feedback (a simple toast message)
    showToast(`Changed the color to ${newColor}!`);

    // Update the color index to loop through the colors
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Function to show a toast message
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    document.body.appendChild(toast);

    // Make the toast disappear after 2 seconds
    setTimeout(() => {
        toast.remove();
    }, 2000);
}

// Add event listener to the html element for background color change
html.addEventListener("click", changeBackgroundColor);

// Add event listener for the Escape key (only once)
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        window.location.href = "index.html"; // Navigate back to the index page
    }
});
