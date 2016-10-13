// 引用项目所需模块
const express = require('express');
const bodyParser = require('body-parser');
const template = require('art-template');

const app = express();

//配置静态资料目录及数据解析
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

//配置模版引擎，缓存
template.config('cache',false);
app.engine('html', template.__express);
app.set('view engine', 'html');

app.use('/',require('./routes/index.js'));

app.listen(3000,function(){
    console.log('Server is running...please visited http://localhost:3000/')
})