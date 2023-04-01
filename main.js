function myFunction() {
  document
    .getElementById("main-menu-list")
    .classList.toggle("main-menu-list--active");
}

$("hamburger-menu-icon").click(function () {
  $("hamburger-menu-icon").css("transform", "scale(1,-1) ");
});
