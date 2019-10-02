const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8082;

app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
//Adds the react production build to serve react requests
app.use(express.static(path.join(__dirname, './client/build')));

//connect db
connectDB();

//mount books api
const booksRouter = require('./routes/api/books');
app.use('/api/books', booksRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});