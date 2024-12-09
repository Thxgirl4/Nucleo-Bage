import mongoose from 'mongoose';

const conexao = await mongoose.connect('mongodb+srv://anacastrobg001:Ta99poh0k5jbfntf@cluster0.2kjeg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

export default conexao