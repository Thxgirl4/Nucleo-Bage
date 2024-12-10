import Tutor from '../models/tutorModel.js';
import Animal from '../models/animalModel.js';

// Criar um novo tutor e animal
export const createTutorAndAnimal = async (req, res) => {
    const { tutor, animal } = req.body;

    try {
        const newTutor = new Tutor(tutor);
        await newTutor.save();

        const newAnimal = new Animal({ ...animal, tutor: newTutor._id });
        await newAnimal.save();

        res.status(201).send({ tutor: newTutor, animal: newAnimal });
    } catch (error) {
        res.status(400).send(error);
    }
};