// Sample Function that gets element that I defined in index.html I defined showMessage in the script.js file
function showMessage(message) {
    document.getElementById('message').textContent = message;
}

// Using Functions to Modify Web Pages
function changePercentOff(percentage) {
    document.getElementById('percent-off').textContent = percentage + "% OFF";
}