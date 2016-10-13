const mongoose = require("mongoose");

// 连接数据库
mongoose.connect('mongodb://localhost/stu');
// 获取当前数据库连接
const db = mongoose.connection;

// 监听数据库连接事件
db.on('error', function (err) { console.error('数据连接失败：', err) });
db.on('open', function() {console.log('打开数据库连接')} );

var Student = mongoose.model('students',{
    sName: String,
    sAge: Number,
    sSex: String,
    sPhone: String,
    // cId: Object,
    sEmail: String,
    // classId: Object,
    sCreateTime: Date,
    sUpdateeTime: Date,
});

// var Teacher = mongoose.model('teachers',{
//     tName: String,
//     tSex: String,
//     tPhone: String,
//     tEmail: String,
//     classId: Object,
//     tCreateTime: Date,
//     tUpDateTime: Date,
// });

// var Course = mongoose.model('courses',{
//     cName: String,
//     cCredit: String,
//     cCreateTime: Date,
//     cUpDateTime: Date,
// });

// var Grade = mongoose.model('grades',{
//     sId: Object,
//     cId: Object,
//     gScore: Number,
//     gCreateTime: Date,
//     gUpDateTime: Date,
// });

// var Class = mongoose.model('classes',{
//     className: String,
//     classPeroid: Number,
//     classCreateTime: Date,
//     classUpDateTime: Date,
// })

module.exports = Student;

// module.exports = Teacher;

// module.exports = Course;

// module.exports = Grade;

// module.exports = Class;