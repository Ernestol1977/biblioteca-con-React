import express from 'express';
import { PORT } from './config.js';
import { sequelize } from './db.js';

import './models/book.js';

import bookRoutes from './routes/books.routes.js';

const app = express();

try {
    app.use(express.json());
    app.listen(PORT);
    app.use(bookRoutes);
    
    // await sequelize.authenticate();
    await sequelize.sync();

    console.log(`Server listening on port ${PORT}`);

} catch (error) {
    console.log(`There was an errot on initialization`);
};
