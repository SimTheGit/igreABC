// IgreABC - General script (clean version)
console.log("IgreABC general script loaded");

// Simple cookie consent example
function acceptCookies() {
    document.cookie = "cookies_accepted=true; max-age=" + (365*24*60*60) + "; path=/";
    document.getElementById("cookie_consent").style.display = "none";
}

// Run when page loads
window.addEventListener('load', function() {
    // Add any code you want to run on every page here
    console.log("Page ready");
});
