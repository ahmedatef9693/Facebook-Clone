$(document).ready(function () {
  var DarkModeFlag = localStorage.getItem("DarkMode");

  if (DarkModeFlag == 1) {
    $(".main-body").css("background-color", "#191A1B");
  } else if (DarkModeFlag == 0) {
    $(".main-body").css("background-color", "White");
    $(".main-body > .grid-parent-navbar").css("background-color", "White");
    $("input[type='search']").css("background-color", "White");
    $(".stories-reels-rooms").css("background-color", "White");
    $(".create-post").css("background-color", "White");
    $(".post").css("background-color", "White");
    $(".post2").css("background-color", "White");
    $(".write-post").css("background-color", "White");
  }
});
