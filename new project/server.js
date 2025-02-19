const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const htmlContent = `
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
            <title>Привет, мир!</title>

            <style>
            
                /* Встроенные стили */
                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #f4f4f4;
                }
                h1 {
                    color: #3498db;
                }
                .container {
                    margin-top: 20px;
                }
                .btn {
                    background-color: #3498db;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                .btn:hover {
                    background-color: red;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 bg-primary">
                        <h1>Test</h1>
                        <p>Тут будет текст</p>
                        <button class="btn">Кнопка1</button>
                    </div>
                    <div class="col-md-6 bg-success">
                        <h1>Super test</h1>
                        <p>Тут будет текст</p>
                        <button class="btn">Кнопка2</button>
                    </div>
                </div>
            </div>
        </body>
        </html>
        `;

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(htmlContent);
    } else {
        res.statusCode = 404;
        res.end('Страница не найдена');
    }
});

server.listen(3000, () => {
    console.log('Сервер работает на порту 3000');
});
