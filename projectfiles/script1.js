function showSignupForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}

function showLoginForm() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}
////// script1.js

//////for guidance.html page 🖍️ JavaScript Event Code: Show alert on mouseover
document.getElementById('submitBtn').addEventListener('mouseover', function() {
    alert('Ready to submit your details? Double-check before clicking!');
});

