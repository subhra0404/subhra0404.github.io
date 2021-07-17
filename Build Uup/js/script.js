$(document).ready(function() {
  $(".navbar > button").on("click", function() {
    0 == $("body, html").scrollTop() && $(".navbar").toggleClass("bg-light")
  })
});
$(window).scroll(function() {
  80 <= $(window).scrollTop() ? $(".navbar").addClass("bg-light") : $(".navbar-collapse").hasClass("show") || $(".navbar").removeClass("bg-light")
});
