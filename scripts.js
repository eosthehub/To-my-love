function toggleMenu() {
    const menuContent = document.querySelector('.menu-content');
    menuContent.style.display = menuContent.style.display === 'flex' ? 'none' : 'flex';
}

function sendMessage() {
    const message = document.getElementById('message').value;
    db.collection("messages").add({
        text: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        alert("Mensagem enviada com sucesso!");
        document.getElementById('message').value = ""; // Limpa a caixa de texto
    })
    .catch((error) => {
        console.error("Erro ao enviar mensagem: ", error);
    });
}

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
