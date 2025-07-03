import express from 'express';
import fs from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours.json`))

app.use(express.json())

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        totalResults: tours.length,
        data: tours,
    })
})

app.post('/api/v1/tours', (req, res) => {

    const newId = tours.length
    const newTour = Object.assign({ id: newId }, req.body)
    tours.push(newTour)

    fs.writeFileSync(
        `${__dirname}/dev-data/data/tours.json`,
        JSON.stringify(tours, null, 2),
        (err) => {
        console.log(err)
    })

    res.status(201).send(newTour)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})