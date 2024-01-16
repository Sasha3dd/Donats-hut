function orderDonut() {
    alert("Дякуємо за ваше замовлення! Очікуйте на свої смачні пончики!");
}

function goToPurchase(donutType) {
    window.location.href = 'purchase.html?type=' + donutType;
}
