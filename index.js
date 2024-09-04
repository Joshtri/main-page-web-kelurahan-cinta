import { config } from "dotenv";
import express from "express";
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import indexRoute from "./routes/index.route.js";

// Load environment variables from .env file
config();

const PORT = process.env.PORT || 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set the static files directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set the main route
app.use('/', indexRoute);

// Middleware to handle 404 errors
app.use((req, res, next) => {
    res.status(404);
    res.render('error', {
        message: 'Page Not Found',
        error: { status: 404 }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
