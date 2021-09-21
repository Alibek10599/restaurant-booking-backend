const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('ith restaraunt');
})

module.exports = router;