/*
* @Author: bin
* @Date:   2016-09-26 09:35:16
* @Last Modified by:   bin
* @Last Modified time: 2016-10-11 00:47:02
*/

var mongoose = require('mongoose');

var teacherSchema = new mongoose.Schema({
  "useremail":String,
  "course" : [Number]
});

var Teacher = mongoose.model("Teacher",teacherSchema);

module.exports = Teacher;