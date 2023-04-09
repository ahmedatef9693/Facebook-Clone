$("#dark-mode-toggle").on("click", function () {
  if ($("#dark-mode-toggle").prop("checked") == true) {
    console.log("checked");
    $(".mobile-body").css("background-color", "#191A1B");
    $(".back-or-search > input").css("background-color", "#191A1B");
    localStorage.setItem("DarkMode", "1");
  } else {
    console.log("unchecked");
    $(".mobile-body").css("background-color", "White");
    $(".back-or-search > input").css("background-color", "White");
    $("body").css("background-color", "White");
    localStorage.setItem("DarkMode", "0");
  }
});
