document.addEventListener("DOMContentLoaded", function () {
    var cursor = document.getElementById("custom-cursor");
  
    document.addEventListener("mousemove", function (e) {
      var x = e.clientX - (cursor.offsetWidth / 2);
      var y = e.clientY - (cursor.offsetHeight / 2);
  
      cursor.style.transform = "translate(" + x + "px, " + y + "px)";
    });
  });
  