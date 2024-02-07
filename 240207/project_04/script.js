$("nav a").click(function (e) {
  $.scrollTo(this.bash || 0, 1500);
  e.preventDefault();
});
