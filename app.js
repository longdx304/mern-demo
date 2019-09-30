const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 8082;

app.use(bodyParser.json());

//connect db
connectDB();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

//mount books api
const booksRouter = require('./routes/api/books');
app.use('/api/books', booksRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});