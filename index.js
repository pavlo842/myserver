const express = require('express'); // подключение express и запись в переменную express

const booksRouter = express.Router(); // маршрутизатор - сущность роутера в переменной booksRouter

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

// РЕДИРЕКТ
app.get('/blog', (req, res, next) => {
    // res.redirect('https://www.onliner.by/'); // редирект на сторонний ресурс
    res.redirect('/'); // редирект на главную страницу - первым параметром можно передать статус
});

// DOWNLOAD FILES
app.get('/downloadBooks', (req, res, next) => {
    // res.download('./public/books.html'); // путь для загрузки файла
    res.download('./public/books.txt', 'downloadfiles', () => { // путь для загрузки файла - второй параметр кастомное имя файла
        console.log('file sent to client brouser!'); // третий параметр callback сообщение об отправке файла на клиент
    });
});

booksRouter.get('/', (req, res) => { // страница через роутер booksRouter http://localhost:5000/books
    res.send('Books');
});

booksRouter.get('/about', (req, res) => { // страница через роутер booksRouter http://localhost:5000/books/about
    res.send("About books");
});

app.use('/books', booksRouter); // инициализация маршрута http://localhost:5000/books
app.listen(5000, () => { // инициализация сервера на 5000 порту
    console.log('Its started', new Date()); // сообщение в консоль с датой запуска  
});
// вызов сервера http://localhost:5000/
