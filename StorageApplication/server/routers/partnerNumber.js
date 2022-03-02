const express = require('express');
var router = express.Router();
import con from '../database';

router.get('/partnerNumber',function(req,res){
    con.query('SELECT Count(id) as clientDB FROM `client`',function(error,rows,fields){
        if(error) console.log(error);
        else res.send(rows[0]);
    });
});
export default router;