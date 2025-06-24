const express = require('express');


const router = express.Router();


router.get('/',(req,res)=>{
    res.json({message:'Hello World'});
});

router.get('/quote',(req,res)=>{
    res.json({
        quote: "The only limit to our realization of tomorrow is our doubts of today."
    });
});

router.get('/healtTip',(req,res)=>{
    res.json({
        Tip: "Drink plenty of water, eat a balanced diet, and get regular exercise to maintain good health."
    });
});

module.exports = router;