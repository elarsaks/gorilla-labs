import express from 'express';

const app = express();
const port = 4000; // You can choose the port you want

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
