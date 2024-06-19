// Configuração do Firebase
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCvfbth79IFEin-yW3g2swM6AgGbsjCzII",
    authDomain: "to-my-lov.firebaseapp.com",
    projectId: "to-my-lov",
    storageBucket: "to-my-lov.appspot.com",
    messagingSenderId: "1058230739440",
    appId: "1:1058230739440:web:b42be3f8c96ec51f24fd35",
    measurementId: "G-MTL0DMQ94J"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
</script>
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
