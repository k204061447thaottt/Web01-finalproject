// include
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function result() {
  var temp = document.getElementById("name").value;
  document.getElementById("name_KQ").innerText = temp;

  var temp = document.getElementById("email").value;
  document.getElementById("email_KQ").innerText = temp;

  var temp = document.getElementById("phone").value;
  document.getElementById("phone_KQ").innerText = temp;

  var temp = document.getElementById("phone").value;
  document.getElementById("phone_KQ").innerText = temp;

  var checkbox = document.getElementsByName("gender");
  for (var i = 0; i < checkbox.length; i++){
      if (checkbox[i].checked === true){
          ketQua = checkbox[i].value;
      }
  }
  document.getElementById("gender_KQ").innerText = ketQua;

  var ele = country.value;
  document.getElementById('country_KQ').innerHTML =  `${ele}`;

  var d =document.getElementById("day").value;
  var m = month.value;
  var y =document.getElementById("year").value;
  var ketQua = d + "/" + m +"/" + y;
  document.getElementById('DoB_KQ').innerHTML = ketQua;
  



  
}
function showCountry(){
var ele = country.value;
document.getElementById('country_KQ').innerHTML =  `${ele}`;
}