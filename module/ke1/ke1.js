const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
   
    res.render('ke1/ke1');
});
router.get('/ke1kaoshi',(req, res)=>{
    res.render('ke1/ke1kaoshi');
})



module.exports = router;



