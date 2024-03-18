let isDarkMode = true;

function applyDarkMode() {
    const toggleDarkModeButton = document.getElementById("toggleDarkModeButton");

    if (isDarkMode) {
        document.body.style.backgroundColor = "#091540";
        document.body.style.color = "white";
    } else { 
        document.body.style.backgroundColor = "white";
        document.body.style.color = "#091540";
    }
}

applyDarkMode(); // Apply initial dark mode state

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    applyDarkMode();
}