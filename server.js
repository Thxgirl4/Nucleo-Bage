// server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import usuarioRoutes from './routes/usuarioRoutes.js';
import tutorAnimalRoutes from './routes/tutorAnimalRoutes.js';
import agendamentoRoutes from './routes/agendamentoRoutes.js';
import tutorRoutes from './routes/tutorRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();

// para obter o diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 3000;


// Middleware para parsear JSON
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// conexão com o MongoDB Atlas
const uri = "mongodb+srv://anacastrobg001:Ta99poh0k5jbfntf@cluster0.2kjeg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB Atlas'))
    .catch(err => console.error('Erro ao conectar ao MongoDB Atlas', err));


// Rota para a página de login
//app.get('/login', (req, res) => {
   // res.render('login'); // Renderiza a view 'login.ejs'
//});

app.use('/', tutorAnimalRoutes);
app.use('/', usuarioRoutes);
app.use('/', agendamentoRoutes);
app.use('/', tutorRoutes);

// iniciar o servidor usando a porta 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});