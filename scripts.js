function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = '09032024';
    const errorMessage = document.getElementById('error-message');

    if (password === correctPassword) {
        location.href = 'images.html';
    } else {
        errorMessage.style.display = 'block';
    }
}