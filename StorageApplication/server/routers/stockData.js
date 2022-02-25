const express = require('express');
var router = express.Router();
import con from '../database';

router.get('/stock',function(req,res){
    con.query('SELECT s.date,u.username,b.brand_name,m.model_name,col.phone_color,cap.capacity,s.amount from stock as s Inner JOIN user as u ON u.id = s.userID INNER JOIN phone as p ON p.id = s.phoneID INNER JOIN brand as b ON b.id = p.brandID INNER JOIN model as m ON m.id = p.modelID INNER JOIN color as col ON col.id = p.colorID INNER JOIN capacity as cap ON cap.id = p.capacityID WHERE s.statusId = 1 ORDER BY `s`.`date` ASC;',function(error,rows,fields){
        if(error) console.log(error);
        else res.send(rows);
    });
});
export default router;