require('./check-versions')()
var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
var express = require('express')
var router = require('./controller');
var db = require("./models/db.js");
var session = require('express-session');
var webpack = require('webpack')
var opn = require('opn')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')



// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on("connection",function(socket){
  let str = "liaotian";
  socket.on(str,function(msg){
    //把接收到的msg原样广播
    io.emit(str,msg);
  });
  router.everychat(function (result) {
    for(let i = 0; i < result.length; i++){
      socket.on(str+i,function(msg){
        //把接收到的msg原样广播
        io.emit(str+i,msg);
      });
    }
  });

});

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use("/avatar", express.static("./build/avatar"));
app.use("/", express.static("./build/upload"));
app.post("/doaddcourse",router.doAddCourse);
app.get('/allcourse',router.showAllCourse);
app.post('/passcourse',router.passcourse);
app.post('/deletecourse',router.deletecourse);
app.post('/doregist',router.doRegist);
app.post('/onecourse', router.onecourse);
app.post('/mycourse', router.mycourse);
app.post('/changeinfo',router.changeinfo);
app.post('/apply',router.apply);
app.post('/getapply',router.getapply);
app.post('/docheckteacher',router.docheckteacher);
app.post('/addpercourse',router.addpercourse);
app.post('/docomment',router.docomment);
app.post('/getcomments',router.getcomments);
app.post('/exit',router.exit);
app.post('/dostar',router.dostar);
app.post('/dowrite',router.dowrite);
app.post('/getwrites',router.getwrites);
app.post('/personcourse',router.personcourse);


app.get('/limits', router.limits);
app.get('/classify', router.classify);


// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = http.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
