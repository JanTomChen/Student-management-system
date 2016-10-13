const express = require('express');
const Student = require('../mongoose.js');
const router = express.Router();


router.post("/remove", function (req, res) {
    Student.findByIdAndRemove(req.body.id, function (err) {
        if (err) {
            res.json({ code: 'error', message: '系统错误' })
        }
        else {
            res.json({ code: 'success', message: '成功！' })
        }
    })
});
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