const express = require('express');
const Todo = require('../server/models').Todo;
const router = express.Router();
const msg = {
    'restaraunt':[{
        id: '1',
        name:'Tagam+'
    },
    {   id: '2',
        name:'Capitol'
},
{       id: '3',
        name:'Navat'
}]
}
router.get('/restaraunts', (req,res)=>{
    
    res.send(msg);
})
router.get('/restaraunts/:id', (req, res)=>{
    res.send(msg.restaraunt[req.params.id-1])
})

router.post('/', (res,req)=>{
    const obj = {
        id: req.body.id,
        name: req.body.name
    }
    msg.restaraunt.push(obj)
    console.log(msg.restaraunt)
    res.send('posted successfully')
})

module.exports = router;