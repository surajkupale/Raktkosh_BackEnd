const express = require('express')
const router = express.Router()
const formBuisness = require('../buisness_logic/form');

// middleware that is specific to this router
router.get('/signup',async (req, res) => {
    try {
        //Some Buisness Logic
        await formBuisness.formFunction();        
        console.log(new Date());
        res.send('signup')
    } catch (error) {
        
    }
});

module.exports = router