const express = require('express');
var router = express.Router();
import con from '../database';

router.get('/currentlyInStock',function(req,res){
    con.query('SELECT Sum(stock.amount)as `beerkezett` FROM `stock` Inner JOIN status on status.id = stock.statusID WHERE status.status = "Beérkezett" && `warehouseID`=1;',function(error,rows,fields){
        if(error) console.log(error);
        else{
            res.send({number:rows[0].beerkezett});
        }
    });
});
export default router;