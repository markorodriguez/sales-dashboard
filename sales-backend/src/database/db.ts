import mongoose from 'mongoose';

const db = mongoose.connect('mongodb://localhost:27017/sales').then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log('Error connecting to database', err);
});

export default db;