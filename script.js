
var dropdown = document.getElementById("department-select");
var page = document.getElementById("department-select");
let authButtons = document.querySelector('.auth-buttons');
let addPapersButton = document.querySelector('.add-papers');

let isLogged = localStorage.getItem('isLoggedIn');
let isLoggedAsStud = localStorage.getItem('isLoggedInAsStud');



localStorage.setItem('departmentSelectedGlobal', "Computer Science");


if(isLogged == 'true'){
    authButtons.classList.add('disp-none');
}else{
    if(authButtons.classList.contains('disp-none')){
        authButtons.classList.remove('disp-none');
    }
}

if(isLoggedAsStud == 'false'){
    addPapersButton.classList.add('disp-none');
}else{  
    if(addPapersButton.classList.contains('disp-none')){
        addPapersButton.classList.remove('disp-none');
    }
}


dropdown.addEventListener('change', function(){
    console.log('vaaaal::: ' + dropdown.value);
    const selectedDepartment = dropdown.value;
        localStorage.setItem('departmentSelectedGlobal', selectedDepartment);

        console.log(localStorage.getItem('departmentSelectedGlobal'));
})

addPapersButton.addEventListener('click', function(){
    if(isLoggedAsStud == 'false'){
        alert('Please login as student first');
    }else{
        window.location.href = 'papers.html';
    }
})




// Log the selected value to the console (you can do whatever you want with it)
//console.log("Selected value:", selectedValue);

// document.addEventListener('DOMContentLoaded', function() {
//     // Redirect to login page when login button is clicked
//     document.querySelector('.auth-buttons .login-btn').addEventListener('click', function() {
//         window.location.href = 'login.html';
//     });

//     // Redirect to signup page when signup button is clicked
//     document.querySelector('.auth-buttons .signup-btn').addEventListener('click', function() {
//         window.location.href = 'signup.html';
//     });


//     dropdown.addEventListener('click', function(){
//         console.log(dropdown.value);
//     })
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const signupForm = document.getElementById('signup-form');

//     signupForm.addEventListener('submit', function(e) {
//         e.preventDefault();
//         const formData = new FormData(signupForm);
//         const userData = {};
//         for (let [key, value] of formData.entries()) {
//             userData[key] = value;
//         }

//         // Send user data to the server for signup
//         // Example AJAX request
//         // fetch('/api/signup/student', {
//         //     method: 'POST',
//         //     headers: {
//         //         'Content-Type': 'application/json'
//         //     },
//         //     body: JSON.stringify(userData)
//         // })
//         // .then(response => response.json())
//         // .then(data => {
//         //     console.log(data);
//         // })
//         // .catch(error => console.error('Error:', error));
//     });
// });


//Go to respected department research list
