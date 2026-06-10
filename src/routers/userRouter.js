// userRuter.js

const { prisma } = require('../config/database');

const  express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Página do usuário");
});

router.post("/user", async (req, res) => {
    try {
        const { email, password, userType} = req.body;
        if (!email || !password || !userType) {
            return res
            .status(400)
            .json({ message:"Por favor insira os dados obrigatórios"});
        }
        const page = await prisma.user.create({
            data: {email, password, userType},
        });
        return res
        .status(201)
        .json({ message: "Página criada com sucesso!", data: page});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao criar o usuário"});
    }
});

module.exports = router;