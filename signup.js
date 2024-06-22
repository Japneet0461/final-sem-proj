const signUpButton = document.querySelector('.submit-button');
const username = document.querySelector('#username');
const password = document.querySelector('#password');


signUpButton.addEventListener('click', function(e) {
    console.log('tapped');

    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if users exist in local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if username is already taken
    const userExists = users.find(user => user.username === username);

    if (userExists) {
        alert('Username already taken. Please choose another one.');
    } else {
        // Add new user to users array
        users.push({ username: username, password: password });

        // Save updated users array to local storage
        localStorage.setItem('users', JSON.stringify(users));

        alert('Sign-up successful!');
        // Redirect to login or welcome page after successful sign-up
        // For now, redirecting to login.html
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('isLoggedInAsStud', false);
        localStorage.setItem('isLoggedInAsProf', true);
        window.location.href = 'index.html';
    }
});