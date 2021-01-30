const express = require('express');
const app = express();
const connectDB = require('./config/db');
const PORT = 4000;
require('dotenv').config();

connectDB();

app.get('/', (req, res) => {
    res.send("Hello World ! ");
});

//Habilito express.json
app.use(express.json({extended:true}));


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

