const express = require('express');
const argon2 = require('argon2');
var router = express.Router();
import con from '../database';

router.post('/Login', async (req, res) => {
	con.query('select password from user where username = ?', [req.body.username], async (err, results) => {
        try {
			if (await argon2.verify(results[0].password, req.body.password)) {res.send({message:'auth_success'});}
            else {res.send({message:'auth_failed'});}
	    } catch (err) {console.log(err);}       
	});
});
export default router;