import { fileURLToPath } from 'node:url';

import express, { json } from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'node:path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours.json`))

const tourRouter = express.Router()

app.use(json())
app.use(morgan('dev'))

app.use('/api/v1/tours', tourRouter)

tourRouter.param('id', (req, res, next, val) => {
    console.log(val)
    next()
})

tourRouter
    .route('/')
    .get((req, res) => {
        res.status(200).json({
        status: 'success',
        totalResults: tours.length,
        data: tours,
        })
    })
    .post((req, res) => {

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

tourRouter.route('/:id').get((req, res) => {
    const tour = tours.find(tour => tour.id === parseInt(req.params.id))
    res.status(200).send({
        status: 'success',
        data: tour,
    })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})