require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
    console.log("Servidor aberto na porta 3000")
});