
// variable: authorized users 
var authorizedUsers = [
    {username:"Sysadmin",password:"123"},
    {username:"Doctor",password:"456"},
    {username:"Client",password:"789"},
]
// fucntion: capitalize fisrt letter in the username
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function fixLettersCase() {
    var usernameInput = document.getElementById("username");
    var usernameValue = usernameInput.value.trim();
    
    usernameInput.value = usernameValue.charAt(0).toUpperCase() + usernameValue.slice(1).toLowerCase();
}

// fucntion: redirect user based on his password
function redirectUser() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // redirection based on the password 
    switch (password) {
        case "123":
            window.location.href = "admin.html";
            break;
        case "456":
            window.location.href = "doctor.html";
            break;
        case "789":
            window.location.href = "patient.html";
            break;
        default:
            alert("Invalid password. Access denied.");
    }
}
