const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

import Login from './routers/Login';
import * as Query from '../const/allQuery.tsx';

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use(Login);
app.use(Query.userdata);
app.use(Query.brandData);
app.use(Query.currentData);
app.use(Query.deliverynumber);
app.use(Query.warehouseData);
app.use(Query.stockData);
app.use(Query.soldData);
app.use(Query.workersNumber);
app.use(Query.partnerNumber);
app.use(Query.clientNames);
app.use(Query.phoneTypes);

const server = app.listen(4550, function(){
    const host = server.address().address
    const port = server.address().port
    console.log("start");
});




