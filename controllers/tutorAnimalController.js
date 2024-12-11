import Tutor from '../models/tutorModel.js';
import Animal from '../models/animalModel.js';

// Criar um novo tutor e animal
export const createTutorAndAnimal = async (req, res) => {
    const { tutor, animal } = req.body;

    console.log('Dados recebidos:', req.body); // Adicione esta linha para depuração

    try {
        const newTutor = new Tutor(tutor);
        await newTutor.save();

        const newAnimal = new Animal({ ...animal, tutor: newTutor._id });
        await newAnimal.save();

        // Redireciona para a rota de confirmação
        res.redirect(`/tutores-e-animais/confirmacao?tutor=${encodeURIComponent(newTutor.nome)}&animal=${encodeURIComponent(newAnimal.nome)}`);
    } catch (error) {
        console.error('Erro ao cadastrar tutor e animal:', error); // Adicione esta linha para depuração
        res.status(400).send(error);
    }
};