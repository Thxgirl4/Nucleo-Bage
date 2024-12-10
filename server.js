// server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import usuarioRoutes from './routes/usuarioRoutes.js';
import tutorAnimalRoutes from './routes/tutorAnimalRoutes.js';
import agendamentoRoutes from './routes/agendamentoRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();

// Obter o diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public')); 
const PORT = process.env.PORT || 3000;


// Middleware para parsear JSON
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexão com o MongoDB Atlas
const uri = "mongodb+srv://anacastrobg001:Ta99poh0k5jbfntf@cluster0.2kjeg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB Atlas'))
    .catch(err => console.error('Erro ao conectar ao MongoDB Atlas', err));

// Usar as rotas de usuario
app.use('/', usuarioRoutes);

// Rota para a página de login
//app.get('/login', (req, res) => {
   // res.render('login'); // Renderiza a view 'login.ejs'
//});

// Rota de login
app.get('/login', (req, res) => {
    const { name, senha } = req.body;

    // Simulação de autenticação (substituir por lógica real)
    if (name === 'admin' && senha === '12345') {
        // Redirecionar para a página de cadastro ao fazer login
        res.redirect('/tutor-e-animais/novo');
    } else {
        // Redirecionar de volta ao login com uma mensagem de erro
        res.send('<script>alert("Credenciais inválidas!"); window.history.back();</script>');
    }
});

app.use('/', tutorAnimalRoutes);

app.use('/', agendamentoRoutes);
// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});