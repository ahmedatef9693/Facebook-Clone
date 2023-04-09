$("#dark-mode-toggle").on("click", function () {
  if ($("#dark-mode-toggle").prop("checked") == true) {
    console.log("checked");
    $(".mobile-body").css("background-color", "#191A1B");
  } else {
    console.log("unchecked");
    $(".mobile-body").css("background-color", "White");
  }
});
