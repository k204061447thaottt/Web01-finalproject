
  
  var number = 0;
  function plus1() {
    number++;
    document.getElementById("ggg").innerText = number;
  }
  function minus1() {
    number--;
    document.getElementById("ggg").innerText = number;
  }
  
  const ELEMENT_LI = document.querySelectorAll(".img-li");
  
  ELEMENT_LI.forEach(function (element, index) {
    element.onclick = function () {
      var imagePath = this.getAttribute("src");
      document.getElementById("main-img").setAttribute("src", imagePath);
    };
  });

  
  
  