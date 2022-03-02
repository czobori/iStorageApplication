const express = require('express');
var router = express.Router();
import con from '../database';

router.get('/workersNumber',function(req,res){
    con.query('SELECT COUNT(id) as workersCount FROM `user`;',function(error,rows,fields){
        if(error) console.log(error);
        else res.send(rows[0]);
    });
});
export default router;