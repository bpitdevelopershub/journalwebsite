// import { model } from 'mongoose';

// import { read } from 'fs';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

mongoose.connect('mongodb://Journal:12345@ds113849.mlab.com:13849/bpit-journal-services');
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

var schema = new mongoose.Schema({
    vol : Number,
    issue: Number,
    year: String,
    description : String,
    title: String
});

var Model = mongoose.model('Model',schema);

var item = {vol :95, issue:1,year:2017,title:'PLANT VOLATILES: CHEMISTRY, ECOLOGY AND EVOLUTION',
            description: 'The cover depicts a figure from the article by Robert Junker and Amy Parachnowitsch'
            +' in this issue. It illustrates how flower scent is a floral trait that must be considered together'
            +' with other floral traits such as colour, morphology and flower nectar in their influenceon'
            +' pollinator visits to flowers. Therefore flowers present multimodal signals that couldbe perceived'
            +' by multiple sensory channels of the flower visitors.'};

var dbitem = new Model(item);
dbitem.save(function(err,data){
    if (err) throw err;
    console.log({name : data});
});

app.get('/archive',function(request,response){
    Model.find({},function(err,data){
        if (err) throw err;
        response.render('archive',{journals : data});
    });
});

app.listen(3000,function(){
    console.log('listening to port 3000');
})

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.post('/login',function(request,response){
    var email = request.body.email;
    var password = request.body.password;
    // console.log(email, password);
    response.json({ user: 'tobi' });
});
