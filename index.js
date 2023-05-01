const express = require('express');
const cors = require('cors');
const chef = require('./data/chef.json');
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req,res)=> {
    res.send(chef);
})

app.get('/:id', (req,res)=> {

    const id = req.params.id;
    const selectedChef = chef.find( c => c.id === id);

    res.send(selectedChef);
})

app.listen(port, ()=>{
    console.log('server is running');
})