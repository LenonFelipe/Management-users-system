const bcrypt = require('bcrypt');
const User = require('../models/User');
const register = async(req, res) => {
    console.log('req.body:', req.body);
    const {name, email, password} = req.body;

    try {
        const existingUser = await User.findOne({ where: { email } });
        if(existingUser) {
            return res.status(400).json({ message: "E-mail já cadastrado"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({ message: 'Usuário criado com sucesso', 
            user: {
                id: newUser.id,
                 name: newUser.name, 
                 email: newUser.email 
                }});
    } catch (error) {
        console.log("error no registro", error);
        res.status(500).json({ message: "Erro ao registrar usuário" });
    }
};

module.exports = {register};