const express = require('express');
var router = express.Router();
import con from '../database';

router.get('/phoneTypes',function(req,res){
    con.query('SELECT DISTINCT b.brand_name,m.model_name FROM `stock` as s INNER JOIN phone as p ON p.id = s.phoneID INNER JOIN brand as b ON b.id = p.brandID INNER JOIN model as m ON m.id = p.modelID WHERE s.warehouseID = 1 AND s.statusID=3 ORDER BY `b`.`brand_name` ASC,m.model_name ASC;',function(error,rows,fields){
        if(error) console.log(error);
        else res.send(rows);
    });
});
export default router;