var express = require('express');
var app = express();
var router = require('./controller');
var db = require("./models/db.js");


var http = require('http').Server(app);
var io = require('socket.io')(http);

var session = require('express-session');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.set('view engine','ejs');
app.use(express.static('./public'));
app.use("/course",express.static('./public'));
app.use("/coursedetail",express.static('./public'));
app.use("/coursemain",express.static('./public'));
app.use("/avatar",express.static("./avatar"));
app.get('/mooc',router.showIndex);
app.post('/doregist',router.doRegist);
app.post('/dologin',router.doLogin);
app.get('/out',router.out);

app.get('/person',router.showPerson);
app.get('/info',router.showInfo);
app.get('/setavatar',router.showSetavater);
app.post('/dosetavatar',router.doSetavater);
app.get('/cut',router.showCut);
app.get('/docut',router.docut);

app.post('/modifyinfo',router.modifyInfo);

app.get("/manage",router.showManage);
app.post("/doaddcourse",router.doAddCourse)
app.get("/tcourse",router.showtCourse)
app.get('/delete',router.doDelete);
app.get('/course',router.showCourse);
app.get('/allcourse',router.showAllCourse);
app.get('/course/:cid',router.showOneCourse);
app.get('/coursedetail/:cid',router.showOneCourseDetail);
app.get('/coursemain/:cid',router.showOneCourseMain)

app.post('/post',router.doPost);

app.get('/localcomments',router.showLocalComments);

app.get("/chat",router.showChatRoom)
io.on("connection",function(socket){
  socket.on("liaotian",function(msg){
    //把接收到的msg原样广播
    io.emit("liaotian",msg);
  });
});
http.listen(5555);
