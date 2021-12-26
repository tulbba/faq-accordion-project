$(".accordion__question").click(function (e) {
  e.preventDefault();
  var currentIsActive = $(this).hasClass("is-active");
  $(this).parent(".accordion").find("> *").removeClass("is-active");
  if (currentIsActive != 1) {
    $(this).addClass("is-active");
    $(this).next(".accordion__content").addClass("is-active");
  }
});
