const express = require('express');
require('dotenv').config();
const cors = require('cors');
const route = require('./app');
// const quote = require('./app');
const PORT = process.env.PORT || 3000;


const app = express();
app.use(cors());
app.use(express.json());

app.use('/', route);



app.use((req,res,next)=>{
    res.status(404).json({message:'Not Found'});
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});


// app.use('/quote', quote);



app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
});