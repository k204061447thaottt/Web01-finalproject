
              

        function loadJson(){
          fetch("../data/product.json")
          .then(function(res){
              if(!res.ok){
                  throw Error("Http Error:", res.status);
              }
              return res.json();
          })
          
          .then(function(data){
            var content = "?";
              let html ="";
              for(let p of data){
                content += "name=" + p.name + "&";
                content += "newPrice=" + p.newPrice + "&";
                content += "oldPrice=" + p.oldPrice + "&";
                content += "image_url=" + p.image_url + "&";
                    html += `<li class="sname"><a onclick="openProduct('${content}')">` + p.name +`</a></li>`
              }
              document.getElementById("myUL").innerHTML = html;
          })
          .catch(function(err){
              alert(err.message);
          })
      
      }
      function openProduct(content) {
      var myWindow = window.open(`Product_detail.html${content}`,"_self");
    }
      loadJson();



    function sortFunction() {
    
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("input__search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          document.querySelector("#myUL").style.display = "block";
            li[i].style.display = "";

        } else li[i].style.display = "none";
        
        if (input.focus == "none" ) {
            li[i].style.display = "none";
            document.querySelector("#myUL").style.display = "none";
            // input.focus="none"
        }
    }};
 

    window.onclick= function(event){
      if(event.target == document.getElementsByTagName("li")
      || event.target == document.getElementById("myUL")
      || event.target == document.getElementById("input__search")){
        document.getElementById("myUL").style.display="block";
      }
      else {
        document.getElementById("myUL").style.display="none";
      }
    }

    