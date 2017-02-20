/*
* @Author: bin
* @Date:   2016-09-26 09:35:16
* @Last Modified by:   bin
* @Last Modified time: 2016-10-18 00:44:48
*/

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  "username":String,
  "useremail":String,
  "userpassword":String,
  'avatar': String,
  'occupation':String,/*职业*/
  'autograph':String,
  'courses':[Number]/*签名*/
});

var User = mongoose.model("User",userSchema);

module.exports = User;