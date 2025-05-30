import 'dotenv/config';
import express from 'express'

import { init } from './init.js';
const app = express()

init();
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
	res.send('Hello World')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
