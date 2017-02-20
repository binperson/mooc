/*
* @Author: bin
* @Date:   2016-09-26 09:35:16
* @Last Modified by:   bin
* @Last Modified time: 2016-10-18 13:16:09
*/

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var courseSchema = new mongoose.Schema({
  "courseindex":Number,
  "title":String,
  "author":String,
  'intro': String,
  "category":[String],
  "learnnum":Number,
  "imglink":String,
  "comments":[{
    "author":String,
    "datetime":Date,
    "content":String
  }],
  "body":[{
      "title":String,
      "intro":String,
      "link":String,
      "notes":Number
    }]
});

var Course = mongoose.model("Course",courseSchema);

module.exports = Course;