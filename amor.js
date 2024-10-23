const phrases = [
    "Eu te amo",          // Português
    "I love you",         // Inglês
    "Te amo",             // Espanhol
    "Je t'aime",          // Francês
    "Ich liebe dich",     // Alemão
    "Ti amo",             // Italiano
    "Te iubesc",          // Romeno
    "Jeg elsker dig",     // Dinamarquês
    "Te quiero",          // Galego
    "Milujem ťa",         // Eslovaco
    "Jag älskar dig",     // Sueco
    "Seni seviyorum",     // Turco
    "Я люблю тебя",       // Russo
    "愛してる",              // Japonês
    "사랑해",               // Coreano
    "मैं तुमसे प्यार करती हूँ",  // Hindi (para mulheres)
    "我爱你",               // Chinês (Simplificado)
    "Ti voglio bene",     // Italiano (alternativo)
    "Σ'αγαπώ",            // Grego
    "Kocham cię",         // Polonês
    "Ik hou van jou",     // Holandês
    "Te sakam",           // Macedônio
    "Mahal kita",         // Filipino
    "Saya cinta padamu",  // Indonésio
    "ฉันรักเธอ",            // Tailandês
    "Ngiyakuthanda",      // Zulu
    "Ek is lief vir jou", // Afrikaans
    "Aloha wau ia 'oe",   // Havaiano
    "Eu ti voglio bene",  // Sardo
    "Ik zie je graag",    // Flamengo
    "Is breá liom tú",    // Irlandês
    "Taim i' ngra leat",  // Gaélico
    "Aishiteru",          // Japonês (romaji)
    "Te dua",             // Albanês
    "Ich hab' dich lieb", // Alemão (informal)
    "Je t'adore",         // Francês (alternativo)
    "Ya tebya lyublyu",   // Russo (transliteração)
    "Wa ai ni",           // Chinês (Simplificado, transliteração)
    "Te volim",           // Sérvio
    "Amo-te",             // Português (Europeu)
];

let currentIndex = 0;

document.getElementById('loveButton').addEventListener('click', () => {
    document.getElementById('phrase').innerText = phrases[currentIndex];
    currentIndex = (currentIndex + 1) % phrases.length;
});