const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 8082;

//connect db
connectDB();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});