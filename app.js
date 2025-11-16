// Telkin listesi (v1)
const affirmations = [
    "Bugün içimdeki huzuru büyütüyorum.",
    "Hayatım bolluk ve akışla doluyor.",
    "Kendime güveniyorum, yolum açık.",
    "Şu anda sahip olduklarım için şükrediyorum.",
    "Her nefesim bana tazelik ve güç getiriyor.",
    "Zihnim net, kalbim hafif."
];

function newAffirm() {
    const card = document.getElementById("card");
    const pick = affirmations[Math.floor(Math.random() * affirmations.length)];
    card.textContent = pick;
}

// Favori kaydet
function saveFav() {
    let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    favs.push(document.getElementById("card").textContent);
    localStorage.setItem("favorites", JSON.stringify(favs));
    loadFavs();
}

// Favorileri yükle
function loadFavs() {
    let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    let div = document.getElementById("favList");
    div.innerHTML = "";
    favs.forEach(f => {
        const el = document.createElement("div");
        el.textContent = f;
        div.appendChild(el);
    });
}

// Not kaydet
function saveNote() {
    const text = document.getElementById("noteBox").value;
    const date = new Date().toLocaleDateString();
    localStorage.setItem("note-" + date, text);
    alert("Not kaydedildi!");
}

document.getElementById("newAffirm").onclick = newAffirm;
document.getElementById("saveFav").onclick = saveFav;
document.getElementById("saveNote").onclick = saveNote;

// İlk açılış
newAffirm();
loadFavs();

// PWA Service Worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}
