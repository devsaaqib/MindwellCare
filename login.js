document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    // Simple validation (for demonstration purposes)
    if (username === 'admin' && password === 'password') {
        window.location.href = 'homepage.html'; // Redirect to homepage or dashboard
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
