const express = require('express');
const router = express.Router();

router.post('/addshiti',function(req,res){
    console.log(req.body)
    let d = req.body;
    let sql = 'INSERT INTO k? VALUES (?,?,?,?,?,?,?,?,?,?,?)';

    let data= [ d.type,
                null, 
                d.timu,
                d.optA,
                d.optB,
                d.optC,
                d.optD,
                d.ans,
                d.jiexi,
                req.session.username, 
                new Date().toLocaleString(),
                d.type];
    conn.query(sql, data, (err, result)=>{
        if(err){
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        res.json({r:'success'});
    });
})




module.exports = router;