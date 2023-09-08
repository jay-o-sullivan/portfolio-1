
// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }
    return true; // If all validation checks pass.
}

// Inside the validateForm function
var email = document.getElementById("email").value;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (name === "" || !email.match(emailRegex) || subject === "" || message === "") {
    alert("Please fill in all fields correctly");
    return false;
}
