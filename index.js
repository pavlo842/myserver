const express = require('express'); // подключение express и запись в переменную express

const app = express(); // инициализация, вызов и запись в переменную app
// app - объект с методами

const products = ['Apple', 'Pen', 'Computer'];

app.get('/', (req, res, next) => { // вызов метода get и передача в параметры '/' (стартовая страница), req - request, res - response, next - функция промежуточной обработки.
    res.send('Its working!'); // отправка сообщения клиенту при запуске сервера
});

app.get('/products', (req, res, next) => {
    // res.send(products);
    console.log('Page', req.query.page); // http://localhost:5000/products?page=0 - передача параметра
    
    res.json({products}); // упаковка массива в json и передача его на клиент
}); // вызов сервера http://localhost:5000/products

app.get('/products/:id', (req, res, next) => {
    if (products[req.params.id]) { // проверка если запрос продукта по id будет на BE то отправить клиенту продукт по id 
        res.send(products[req.params.id]);
    } else {
        res.status(404).send('Product not found!'); // если продукта по id не найдено то отправиться сообщение со статусом ошибки
    }
});

app.listen(5000, () => { // инициализация сервера на 5000 порту
    console.log('Its started', new Date()); // сообщение в консоль с датой запуска  
});
// вызов сервера http://localhost:5000/
