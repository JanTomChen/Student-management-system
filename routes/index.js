const express = require('express');
const Student = require('../mongoose.js');
const router = express.Router();

router.get('/',function(req,res){

    Student.find()
        .select("sName sAge sSex sPhone sEmail")
        .exec(function(err,data){
            if(err){
                res.render('index',{
                    students: []
                });
                return;
            }
            res.render('index',{
                students: data
            })
        });
    
});

module.exports = router;