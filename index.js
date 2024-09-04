import { config } from "dotenv";
import express from "express";
import path from 'path';
import {dirname} from 'path';

import indexRoute from "./routes/index.route.js";

import { fileURLToPath } from 'url';

config();

const PORT = process.env.PORT;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')
app.use('/', indexRoute)


// Middleware untuk menangani kesalahan 404
app.use((req, res, next) => {
    res.status(404);

    res.render('error', {
        message: 'Page Not Found',
        error: { status: 404 }
    });
});



app.listen(PORT,()=>{
    console.log(`run on port ${PORT}`, );
});