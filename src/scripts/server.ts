import express from 'express';

let port = 3000;
let server = express();

server.use(express.static('dist'));

server.listen(port, () =>
{
    console.log(`Сервер запущен! Адрес: http://localhost:${port}`);
});