const express = require('express');
var router = express.Router();
import con from '../database';

router.get('/user',function(req,res){
    con.query('SELECT `id`,`username`,`full_name`,`email`,`phone_number` FROM `user` WHERE 1 ORDER BY `user`.`full_name` ASC',function(error,rows,fields){
        if(error) console.log(error);
        else res.send(rows);
    });
});
export default router;