/*
* @Author: bin
* @Date:   2016-09-25 22:57:33
* @Last Modified by:   bin
* @Last Modified time: 2016-09-25 23:54:51
*/

'use strict';
$(function(){
  $("#myModal li").click(function(){
    $("#myModal .dz-form button").toggleClass("bin-hide");
    $("#myModal li").toggleClass("active");
  });
  $("#login").click(function(){
    if(!$("#myModal li:first").hasClass("active")){
      $("#myModal .dz-form button").toggleClass("bin-hide");
      $("#myModal li").toggleClass("active");
    }
  });
  $("#register").click(function(){
    if(!$("#myModal li:last").hasClass("active")){
      $("#myModal .dz-form button").toggleClass("bin-hide");
      $("#myModal li").toggleClass("active");
    }
  });

});