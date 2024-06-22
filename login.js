const loginButton = document.querySelector('.login-button');


loginButton.addEventListener('click', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if user exists in local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert('Login successful!');
            // Redirect to dashboard or desired page after successful login
            // For now, redirecting to index.html
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('isLoggedInAsStud', true);
            localStorage.setItem('isLoggedInAsProf', false);

            window.location.href = 'index.html';
        } else {
            alert('Invalid username or password');
        }
    });
