// routes/usuarioRoutes.js
import express from 'express';
import Usuario from '../models/usuarioModel.js'; // Ajuste o caminho conforme necessário
import bcrypt from 'bcrypt';

const router = express.Router();

// Rota para exibir a página de gerenciamento de usuários
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.render('listar', { usuarios }); // Renderiza a view 'index.ejs' com a lista de usuários
    } catch (error) {
        res.status(500).send('Erro ao buscar usuários');
    }
});

// Rota para exibir o formulário de criação de usuário
router.get('/usuarios/novo', (req, res) => {
    res.render('createUser '); // Renderiza a view 'createUser .ejs'
});

//-----------Rota para criar um novo usuário
router.post('/usuarios', async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
        res.redirect('/'); // Redireciona para a rota que exibe os usuários
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(400).send('Erro ao criar usuário');
    }
});

// Rota para deletar um usuário
router.delete('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuario) {
            return res.status(404).send('Usuário não encontrado');
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).send('Erro ao deletar usuário');
    }
});

// Rota para exibir a tela de login
router.get('/login', (req, res) => {
    console.log('Rota /login foi chamada');
    res.render('login'); // Renderiza a view 'login.ejs'
});

// Rota para processar o login
router.post('/login', async (req, res) => {
    const { name, senha } = req.body;

    try {
        // Encontrar o usuário pelo nome
        const usuario = await Usuario.findOne({ name });

        // Se o usuário não for encontrado
        if (!usuario) {
            return res.status(401).send('Usuário ou senha inválidos');
        }

        // Verificar se a senha está correta
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (senhaCorreta) {
            // Redirecionar para a página principal ou dashboard
            res.redirect('/'); // ou outra rota
        } else {
            // Se a senha estiver incorreta
            res.status(401).send('Usuário ou senha inválidos');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao processar o login');
    }
});

export default router;