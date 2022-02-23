const express = require('express');
var router = express.Router();
import con from '../database';

router.get('/accordingToTheBrand',function(req,res){
    con.query('SELECT b.brand_name, Sum(s.amount) As berendeltDb FROM stock As s INNER JOIN phone As p On s.phoneID = p.id INNER JOIN brand AS b On p.brandID = b.id Where s.statusID="3" GROUP by b.brand_name ORDER BY `berendeltDb` ASC;',function(error,rows,fields){
        if(error) console.log(error);
        else res.send(rows);
    });
});
export default router;