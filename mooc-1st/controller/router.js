/*
* @Author: bin
* @Date:   2016-09-16 11:18:19
* @Last Modified by:   bin
* @Last Modified time: 2017-02-20 21:43:06
*/

'use strict';

var formidable = require("formidable");
var User = require("../models/User.js");
var Course = require("../models/Course.js");
var md5 = require("md5");
var gm = require('gm');
var path = require('path');
var fs = require('fs');
var util = require('util');
exports.showIndex = function(req,res,next){

  if(req.session.login=='1'){
    var username = req.session.username;

    var login = true;
  }else{
    var username = '';
    var login = false;
  }
  User.find({"username":username },function(err,result){
    if(result.length == 0){
      var avatar = 'moren0.jpg';
      var occupation= 'student';

    }else{
      var avatar = result[0].avatar;
      var occupation =result[0].occupation
    }
    res.render('index',{
      'login':login,
      'username':username,
      'avatar': avatar,
      'occupation':occupation
    });
  })

}


exports.doRegist = function(req,res,next){
  var form = new formidable.IncomingForm();
  form.parse(req,function(err,fields,files){
    var useremail = fields.useremail;
    var userpassword = fields.userpassword;
    var username = "imooc"+fields.useremail;
    User.find({ "useremail":useremail }, function(err,result){
      if(err){
        res.send("-3");
        return;
      }
      if(result.length!=0){
        res.send("-1");
        return;
      }
      userpassword = md5(md5(userpassword)+"binperson");
      var mo = ["moren0.jpg","moren1.jpg","moren2.jpg","moren3.jpg"];
      var more = mo[Math.floor(Math.random()*3)];
      User.create({
        "username":username,
        "useremail":useremail,
        "userpassword":userpassword,
        'avatar': more
      },function(err,useremail){
        if (err) {
          res.send("-3");
          return;
        }
        req.session.login = "1";
        req.session.username = username;
        req.session.useremail = useremail;
        res.send("1");
      });
    })
  });
}

exports.doLogin = function(req,res,next){
  var form = new formidable.IncomingForm();
  form.parse(req,function(err,fields,files){
    var useremail = fields.useremail;
    var userpassword = fields.userpassword;
    var jiamihou = md5(md5(userpassword)+"binperson");
    User.find({"useremail":useremail},function(err,result){
      if(err){
        res.send("-5");
        return;
      }
      if(result.length==0){
        res.send("-1");
        return;
      }
      if(jiamihou==result[0].userpassword){
        req.session.login = "1";
        req.session.username = result[0].username;
        req.session.useremail = result[0].useremail;
        res.send('1');
        return
      }else{
        res.send("-2");
        return;
      }
    })
  });
}
exports.out = function(req,res,next){

  req.session.login = "0";

  res.render('out');
}

exports.showPerson = function(req,res,next){
  if (req.session.login != "1") {
      res.end("非法闯入，这个页面要求登陆！");
      return;
  }
  if(req.session.login=='1'){
    var username = req.session.username;
    var login = true;
  }else{
    var username = '';
    var login = false;
  }
  User.find({"username":username },function(err,result){
    if(result.length == 0){
      var avatar = 'moren0.jpg';
      var occupation= 'student';

    }else{
      var avatar = result[0].avatar;
      var occupation =result[0].occupation;
      var autograph = result[0].autograph;
      var courses = result[0].courses;
      console.log(courses);
      var cl = courses.length;
      var allowncourse = [];

      (function iterator(b){
        if(b==cl){
          res.render('person',{
      'login':login,
      'username':username,
      'avatar': avatar,
      'autograph':autograph,
      'occupation':occupation,
      'content':allowncourse
    });
          return;
        }
        Course.find({'courseindex':courses[b]},function(err,result1){
          if(err){
            res.send('失败');
            return
          }
          var coursecontent = new Object();

          coursecontent.title = result1[0].title;
          coursecontent.imglink = result1[0].imglink;
          coursecontent.cid = result1[0].courseindex;
          JSON.stringify(coursecontent);
          allowncourse.push(coursecontent);
          iterator(b+1);
        })
      })(0)
    }


  })
}

exports.showInfo = function(req,res,next){
  if (req.session.login != "1") {
      res.end("非法闯入，这个页面要求登录！");
      return;
  }
  if(req.session.login=='1'){
    var username = req.session.username;
    var login = true;
  }else{
    var username = '';
    var login = false;
  }
  User.find({"username":username },function(err,result){
    if(result.length == 0){
      var avatar = 'moren0.jpg';
      var occupation = '';
      var autograph = '';
    }else{
      var autograph = result[0].autograph||'';
      var avatar = result[0].avatar;
      var occupation = result[0].occupation||'';

    }
    res.render('info',{
      'login':login,
      'username':username,
      'avatar': avatar,
      'occupation':occupation,
      'autograph':autograph
    });
  })
}
exports.showSetavater = function(req,res,next){
  if(req.session.login!='1'){
    res.end('非法闯入，这个页面要求登陆！')
  }
  var username = req.session.username;
  User.find({'username': username},function(err,result){
    if(result.length == 0){
      var avatar = 'moren0.jpg';
      var occupation= 'student';

    }else{
      var avatar = result[0].avatar;
      var occupation =result[0].occupation
    }
    res.render('setavatar',{
      'login':true,
      'username':req.session.username||'binperson',
      'avatar':avatar,
      'occupation':occupation
    })
  })
}

exports.doSetavater = function(req,res,next){

  var form = new formidable.IncomingForm();
  form.uploadDir = path.normalize(__dirname+'/../avatar');
  form.parse(req,function(err,fields,files){

    var oldpath = files.touxiang.path;
    var newpath = path.normalize(__dirname+'/../avatar')+'/'+req.session.username+'.jpg';
    fs.rename(oldpath,newpath,function(err){
      if(err){
        res.send('失败');
        return;
      }
      req.session.avatar = req.session.username+'.jpg'
      res.redirect('/cut');
    })
  })
}

exports.showCut = function(req,res,next){
  if (req.session.login != "1") {
    res.end("非法闯入，这个页面要求登陆！");
    return;
  }
  res.render('cut',{
    'avatar':req.session.avatar
  });
}

exports.docut = function(req,res,next){
  var filename = req.session.avatar;

  var w = req.query.w;
  var h = req.query.h;
  var x = req.query.x;
  var y = req.query.y;

  gm("./avatar/" + filename)
        .crop(w, h, x, y)
        .resize(100, 100, "!")
        .write("./avatar/" + filename, function (err) {
            if(err){
              res.send('-1');

              return;
            }

            User.update({"username":req.session.username},{"avatar": req.session.avatar},function(){
              res.send("1");
            });
        });

}

exports.modifyInfo = function(req,res,next){
  var form = new formidable.IncomingForm();
  form.parse(req,function(err,fields,files){

    var oldname = req.session.username;

    var username = fields.username;
    var occupation = fields.occupation;

    var autograph = fields.autograph;
    User.find({ "username":oldname }, function(err,result){
      if(err){
        res.send("-3");
        return;
      }
      if(result.length!=1){

        res.send("-1");
        return;
      }
      User.find({ "username":username }, function(err,result1){
          if(err){
          res.send("-3");
         return;
        }
        if(result1.length>=1){

          res.send("-1");
          return;
        }
        var oldpath = path.normalize(__dirname+'/../avatar')+'/'+oldname+'.jpg';
        var newpath = path.normalize(__dirname+'/../avatar')+'/'+username+'.jpg';
        fs.rename(oldpath,newpath,function(err){
        if(err){
          res.send('失败');
          return;
        }

        })
        User.update({ "username":oldname },{"username":username,"occupation":occupation,"autograph":autograph},function(err,result1){
        req.session.username = username;
          res.send("1");
        });
      })

    });
  });
}

exports.showManage = function(req,res,next){
  if(req.session.login=='1'){
    var username = req.session.username;
    var login = true;
  }else{
    res.end("非法闯入，这个页面要求登陆！");
    return;
  }
  User.find({"username":username },function(err,result){
    if(result.length == 0){
      var avatar = 'moren0.jpg';
      var occupation= 'student';

    }else{
      var avatar = result[0].avatar;
      var occupation =result[0].occupation
    }
    res.render('manage',{
      'login':login,
      'username':username,
      'avatar': avatar,
      'occupation':occupation
    });
  })
}
 exports.doAddCourse = function(req,res,next){

  var username = req.session.username;
  var useremail = req.session.useremail;

  var form = new formidable.IncomingForm();
  var post = {},
     file1 = {};
  form.uploadDir = path.normalize(__dirname+'/../avatar/course');
  form
    .on('error', function(err) {
        console.log(err); //各种错误
    })
     //POST 普通数据 不包含文件 field 表单name value 表单value
    .on('field', function(field, value) {
        if (form.type == 'multipart') {  //有文件上传时 enctype="multipart/form-data"
            if (field in post) { //同名表单 checkbox 返回array 同get处理
                if (util.isArray(post[field]) === false) {
                    post[field] = [post[field]];
                }
                post[field].push(value);
                return;
            }
        }
        post[field] = value;
    })
    .on('file', function(field, file) { //上传文件
        file1[field] = file;
    })
    .on('end', function() {
        fn(post, file1); //解析完毕 做其他work
    });
  form.parse(req); //解析request对象

  function fn(fields,files){


    var courseindex = 0
    Course.find({},function(err,result){
      if(err){
        console.log(1);
        return
      }
      if(result.length>0){
        courseindex = result[result.length-1].courseindex+1;
      }
      var catearr = ["前端开发","后端开发","移动开发","数据库","云计算&大数据","运维&测试","视觉设计"];
      var allcoursecategory = [];
      console.log(fields.coursecategory.length)
      for(var i =0;i<fields.coursecategory.length;i++){
        var coursecategory1 = catearr[fields.coursecategory[i]];

        allcoursecategory.push(coursecategory1);
      }

      function getJsonLength(jsonData){
        var jsonLength = 0;
        for(var item in jsonData){
          jsonLength++;
        }
        return jsonLength;
      }
      var courseLength = getJsonLength(fields);
      courseLength = (courseLength-3)/2;
      var coursechapter = [];
      var newcoursecontentindexmore = [];
      var oldpaths = [];
      for(var j = 1;j<=courseLength;j++){
        var coursecontentindex = "contentitle"+j;
        var coursecontentintro = "contentintro"+j;
       var coursecontentflie = 'contentflie'+j;
       var oldlink = files[coursecontentflie].path;

       oldpaths.push(oldlink);
        var coursecontent = new Object();
        coursecontent.title = fields[coursecontentindex];
        coursecontent.intro = fields[coursecontentintro];
        var newpath = path.normalize(__dirname+'/../avatar')+'/course/'+req.session.useremail+courseindex+j+'.mp4';
        newcoursecontentindexmore.push(newpath);
        var newpath1 = newpath;
        coursecontent.link = newpath1;
        JSON.stringify(coursecontent);
        coursechapter.push(coursecontent);
      }
      var imglink = path.normalize(__dirname+'/../avatar')+'/course/'+req.session.useremail+courseindex+'.jpg';

      fs.rename(files.courseimg.path,imglink,function(err){
      if(err){
        res.send('失败');

        return;
      }
      (function iterator(b){

        if(b==oldpaths.length){
          return
        }

        fs.rename(oldpaths[b],newcoursecontentindexmore[b],function(err){
          if(err){
            res.send('失败');
            return
          }
          iterator(b+1);
        })
      })(0)
      Course.create({
      "courseindex":courseindex,
      "title":fields.coursetitle,
      "author":useremail,
      'intro': fields.courseintro,
      "category":allcoursecategory,
      "imglink":imglink,
      "body":coursechapter
      },function(err,courseindex){
       if (err) {
        res.send("-3");
         return;
        }
        res.redirect('/manage');
          });
    })
    });
  }
 }

 exports.showtCourse = function(req,res,next){
  var username = req.session.username;
  var useremail = req.session.useremail;
  Course.find({"author":useremail},function(err,result){
    res.json(result);
  });

 }


exports.doDelete = function(req,res,next){
  var courseindex = req.query.courseindex;
  console.log(courseindex);
  Course.remove({"courseindex":courseindex},function(err){
    if(err){
      console.log('删除失败');
      res.send('-1');
    }
    res.send('1');
  });
}

exports.showCourse = function(req,res,next){
if(req.session.login=='1'){
    var username = req.session.username;

    var login = true;
  }else{
    var username = '';
    var login = false;
  }
  User.find({"username":username },function(err,result){
    if(result.length == 0){
      var avatar = 'moren0.jpg';
      var occupation= 'student';

    }else{
      var avatar = result[0].avatar;
      var occupation =result[0].occupation
    }
    res.render('course',{
      'login':login,
      'username':username,
      'avatar': avatar,
      'occupation':occupation
    });
  })
}

exports.showAllCourse = function(req,res,next){
  Course.find({},function(err,result){
    res.json(result);
  });
}

exports.showOneCourse = function(req,res,next){
  var cid = req.params["cid"];
  if(req.session.login=='1'){
    var username = req.session.username;

    var login = true;
  }else{
    var username = '';
    var login = false;
  }
  User.find({"username":username },function(err,result){
    if(result.length == 0){
      var avatar = 'moren0.jpg';
      var occupation= 'student';

    }else{
      var avatar = result[0].avatar;
      var occupation =result[0].occupation
    }
    Course.find({'courseindex':cid},function(err,result1){
      if(err){
        console.log('1');
        return
      }
      else if(result1.length == 0){
        res.end('错误');
      }else{

        res.render('courseintro',{
          'login':login,
          'username':username,
          'avatar': avatar,
          'occupation':occupation,
          'cid':cid,
          'title':result1[0].title,
          'intro':result1[0].intro,
          'content':result1[0].body
        });
      }

    })

  })
}

exports.showOneCourseDetail = function(req,res,next){
   if(req.session.login=='1'){
    var useremail = req.session.useremail;
    var login = true;
  }else{
    res.end("非法闯入，这个页面要求登陆！");
    return;
  }
  var cid = parseInt(req.params['cid']);
  req.session.cid = cid;
  User.find({'useremail':useremail},function(err,result){
    if(result.length == 0){
      var avatar = 'moren0.jpg';
      var occupation= 'student';

    }else{
      var avatar = result[0].avatar;
      var occupation =result[0].occupation;
      var username = req.session.username;
    }
    if(result[0].courses==undefined){
      result[0].courses = []
    }
    var arr = result[0].courses;
    var flag = 1;
    for(var i = 0;i<arr.length;i++){
      if(arr[i]==cid){
        flag=0;
      }
    }
    if(flag=0){
      arr.push(cid);
      User.update({'useremail':useremail},{"courses":arr},function(){

      Course.find({'courseindex':cid},function(err,result1){
        if(err){
          console.log('1');
          return
        }
        else if(result1.length == 0){
          res.end('错误');
        }else{
          res.render('coursedetail',{
            'login':login,
            'username':username,
            'avatar': avatar,
            'occupation':occupation,
            'cid':cid,
            'title':result1[0].title,

           'content':result1[0].body
          });
        }
      })

    });
    }else{
      Course.find({'courseindex':cid},function(err,result1){
        if(err){
          console.log('1');
          return
        }
        else if(result1.length == 0){
          res.end('错误');
        }else{

          res.render('coursedetail',{
            'login':login,
            'username':username,
            'avatar': avatar,
            'occupation':occupation,
            'cid':cid,
            'title':result1[0].title,

           'content':result1[0].body
          });
        }
      })
    }



  });


}

exports.showOneCourseMain = function(req,res,next){
  if(req.session.login=='1'){
    var useremail = req.session.useremail;
    var login = true;
  }else{
    res.end("非法闯入，这个页面要求登陆！");
    return;
  }
  User.find({"useremail":useremail},function(err,result){
    if(err){
      return;
    }
    if(result.length == 0){
      var avatar = 'moren0.jpg';
      var occupation= 'student';

    }else{

      var avatar = result[0].avatar;
      var occupation =result[0].occupation;
      var username = req.session.username;
      var autograph = req.session.autograph;
    }
    var cid = parseInt(req.params['cid']);
    var chaterid = parseInt(req.query.chapter);


    Course.find({'courseindex':cid},function(err,result1){
        if(err){
          console.log('1');
          return
        }
        else if(result1.length == 0){
          res.end('错误');
        }else{



              var link = result1[0].body[chaterid].link;
              res.render('coursemain',{
                'login':login,
                'username':username,
            'avatar': avatar,
            'occupation':occupation,
            'link':link,
            'autograph':autograph
          });




        }
      })
  });
}

exports.doPost = function(req, res, next) {
    var username = req.session.useremail;
    var cid = req.session.cid;
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        var content = fields.content;
        var date = fields.datetime;

        Course.find({'courseindex':cid},function(err,result){
        /*  User.find({'':})*/
          var commentscontent = result[0].comments||[];
          var commentcontent = new Object();
          commentcontent.author = username;
          commentcontent.datetime = date;
          commentcontent.content = content;

          JSON.stringify(commentcontent);
          commentscontent.push(commentcontent);
          Course.update({'courseindex':cid},{"comments":commentscontent},function(){
            res.send("1");
          });
        })

    });
};

exports.showLocalComments = function(req,res,next){
  if(req.session.login=='1'){
    var useremail = req.session.useremail;
    var login = true;
  }else{
    res.end("非法闯入，这个页面要求登陆！");
    return;
  }
  var cid = req.session.cid;
 var sendcontent = [];
  Course.find({'courseindex':cid},function(err,result){
User.find({"useremail":result[0].author},function(err,result1){

        for (var i = 0; i < result[0].comments.length; i++) {

        var sendcontentobj = new Object();
        sendcontentobj.avatar = result1[0].avatar;
        sendcontentobj.username = result1[0].username;
        sendcontentobj.from = result1[0].autograph;
        sendcontentobj.content = result[0].comments[i].content;
        sendcontentobj.datetime = result[0].comments[i].datetime;
        JSON.stringify(sendcontentobj);
        sendcontent.push(sendcontentobj);

      }
      res.json(sendcontent);

})
  })
}

exports.showChatRoom = function(req,res,next){
  //这个页面必须保证有用户名了，
  if(!req.session.username){
    res.redirect("/mooc");
    return;
  }
  if(req.session.login=='1'){
    var username = req.session.username;

    var login = true;
  }else{
    var username = '';
    var login = false;
  }
  User.find({"username":username },function(err,result){
    if(result.length == 0){
      var avatar = 'moren0.jpg';
      var occupation= 'student';

    }else{
      var avatar = result[0].avatar;
      var occupation =result[0].occupation
    }
    res.render('chatroom',{
      'login':login,
      'username':username,
      'avatar': avatar,
      'occupation':occupation
    });
  })


}