const express = require('express');
var router = express.Router();
import con from '../database';

router.get('/user',function(req,res){
    con.query('SELECT * FROM `user` order by full_name',function(error,rows,fields){
        if(error) console.log(error);
        else res.send(rows);
    });
});
export default router;