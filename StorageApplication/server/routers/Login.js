const express = require('express');
const argon2 = require('argon2');
var router = express.Router();
import con from '../database';

router.post('/Login', async (req, res) => {
	con.query('select password from user where username = ?', [req.body.username], async (err, results) => {
        console.log(req.body.username);console.log(req.body.password);console.log(results[0].password);
        const hash = await argon2.hash(req.body.password,{type:argon2.argon2id});
        if(hash == results[0].password) res.send('auth_success');
        else res.send('auth_failed');
        console.log(hash);
		/*try {
			if (await argon2.verify(results[0].password, req.body.password,{type:argon2.argon2id})) {res.send('auth_success');} 
            else {res.send('auth_failed');} 
        }catch (err){console.log(err)}*/
	});
});
export default router;