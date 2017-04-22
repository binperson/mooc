/*
* @Author: bin
* @Date:   2016-09-26 09:30:34
* @Last Modified by:   bin
* @Last Modified time: 2016-09-26 09:32:47
*/

'use strict';
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('数据库成功打开');
});

module.exports = db;