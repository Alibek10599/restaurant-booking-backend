const express = require('express');
const Todo = require('../server/models').Todo;
const router = express.Router();
const msg = {
    'Restaurant':[{
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
router.get('/Restaurants', (req,res)=>{
    
    res.send(msg);
})
router.get('/Restaurants/:id', (req, res)=>{
    res.send(msg.Restaurant[req.params.id-1])
})

router.post('/', (res,req)=>{
    const obj = {
        id: req.body.id,
        name: req.body.name
    }
    msg.Restaurant.push(obj)
    console.log(msg.Restaurant)
    res.send('posted successfully')
})

module.exports = router;