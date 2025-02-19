const express = require('express');
const path = require('path');
const app = express();

// Отдаем статические файлы из папки 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут для главной страницы
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Другие маршруты...

// Обработчик ошибки 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Запуск сервера
const port = 3000;
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
