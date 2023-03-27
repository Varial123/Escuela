import app from './app'; //equivale al codigo de app.js
import './database';
import { PORT } from './config';

app.listen(PORT);
console.log('Servidor en puerto', PORT);