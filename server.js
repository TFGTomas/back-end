import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes/routes';

dotenv.config();

const app = express();

// Connect to the MongoDB service
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the routes
app.use('/api', routes);

const PORT = process.env.PORT || 3330;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
