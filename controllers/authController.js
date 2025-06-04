const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const register = async(req, res) => {
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

        res.status(201).json({ 
            message: 'Usuário criado com sucesso', 
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

const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        //verify if the user already exists
        const user = await User.findOne({ where: {email} });
        if(!user) {
            return res.status(401).json({ message: 'Usuário em uso'});
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) {
            return res.status(401).json({ message: 'Senha inválida'});
        }

        const token = jwt.sign(
            { id: user.id, email: user.email }, 
            process.env.JWT_SECRET,
            { expiresIn: '1h'}
        );

        res.json({
            message: 'Login realizado com sucesso',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    }   catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ message: 'Erro ao fazer login'});
    }
};


module.exports = {register, login};