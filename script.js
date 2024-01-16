// scripts.js

function goToPurchase(donutType) {
    // Додати код для переходу до сторінки purchase.html з параметром donutType
    window.location.href = 'purchase.html?type=' + donutType;
}

function searchDonuts() {
    // Додати код для пошуку пончиків
    var searchTerm = document.getElementById('searchInput').value; // Припустимо, що у вас є поле вводу з id="searchInput"
    // Далі ви можете використовувати searchTerm для реалізації логіки пошуку
}
