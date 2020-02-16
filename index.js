const express = require('express'); // подключение express и запись в переменную express

const app = express(); // инициализация, вызов и запись в переменную app
// app - объект с методами

const products = ['Apple', 'Pen', 'Computer'];

app.get('/', (req, res, next) => { // вызов метода get и передача в параметры '/' (стартовая страница), req - request, res - response, next - функция промежуточной обработки.
    res.send('Its working!'); // отправка сообщения клиенту при запуске сервера
});

app.get('/products', (req, res, next) => {
    res.send(products);
}); // вызов сервера http://localhost:5000/products

app.listen(5000, () => { // инициализация сервера на 5000 порту
    console.log('Its started', new Date()); // сообщение в консоль с датой запуска  
});
// вызов сервера http://localhost:5000/
