import express from 'express';
import fs from 'fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours.json`))

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({ status: 'success' ,data: tours })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})