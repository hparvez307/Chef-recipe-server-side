const express = require('express');
const cors = require('cors');
const chef = require('./data/chef.json');
const app = express();
const port = 5000;

// cors for cross platform data use locally
app.use(cors());

// api for all chef details

app.get('/', (req, res) => {
    res.send(chef);
})

// api for selected chef and recipe details
app.get('/:id', (req, res) => {

    const id = req.params.id;
    const selectedChef = chef.find(c => parseInt(c.id) === parseInt(id) );

    res.send(selectedChef);
})

// setup server listener
app.listen(port, () => {
    console.log('server is running');
})