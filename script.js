// $(document).ready(function () {
//   $("toggle-menu").click{
//       $("ul").toggleClass("nav.toggle-menu+ul");
//       }
// });

$(document).ready(function () {
  $(function () {
    $(".sec a").click(function (e) {
      e.preventDefault();
      $("a").removeClass("active");
      $(this).addClass("active");
    });
  });
});

const navbar = document.querySelector(".navbar");
window.onscroll = () => {
  if (window.scrollY > 300) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};
