/*
    Student Name:
    File Name: script.js
    Date:
*/

$("#hide").click(function(){
  $("p").hide();
});

$("#show").click(function(){
  $("p").show();
});

$("button").click(function(){
  $("p").hide(1000);
});
