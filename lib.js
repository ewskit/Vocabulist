document.getElementById('google-login').addEventListener('click', () => {
    // Implement Google login functionality here
    alert('Login with Google');
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Implement username and password login functionality here
    if (username === "eli" && password === "eli") {
        const words = ['apple', 'banana', 'cherry', 'date', 'grape'];
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('wordList', JSON.stringify(words));
        window.location.href = 'wordlist.html'; // Redirect to the wordlist page
    } else {
        alert('Login failed');
    }
});
