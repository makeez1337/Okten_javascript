// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар


const productName = document.getElementsByName('productName')[0];
const productAmount = document.getElementsByName('productAmount')[0];
const productPrice = document.getElementsByName('productPrice')[0];
const productImage = document.getElementsByName('productImg')[0];

const arrForLocalStorage = [];

document.forms.f1[4].onclick = function () {
    const obj = {
        productName: productName.value,
        productAmount: productAmount.value,
        productPrice: productPrice.value,
        productImage: productImage.value
    };
    arrForLocalStorage.push(obj);
    localStorage.setItem('products', JSON.stringify(arrForLocalStorage));
    alert('ADDED TO CARD');
};




