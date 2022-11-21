function search() {
    let menusearch = document.querySelector("#menu--search");
    let menuitems = Array.from(document.querySelectorAll(".item"));
    menusearch.value = menusearch.value.toLowerCase();
    menuitems.forEach(function(el) {
        let text = el.innerText.toLowerCase();
        if (text.indexOf(menusearch.value) > -1) {
            document.querySelector("#search--list").style.display = "block";
            el.style.display = "flex";
        } else el.style.display = "none";

        if (menusearch.value == "") {
            el.style.display = "none";
            document.getElementById("search--list").style.display = "none";
        }
    });
}

function loadDataSearch() {
    var xmlhttp = new XMLHttpRequest();
    var url = "../data/products.json";
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            lsearch(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}

function lsearch(arr) {
    var i;
    var div = "";
    for (i = 0; i < arr.length; i++) {
        div +=
            '<div onclick="detail(' + "'" + arr[i].name + "'" + ')" class="item"><p id="sname">' +
            arr[i].name + '</p>' + "</div>";
    }
    div += "</div>";
    document.getElementById("search--list").innerHTML = div;
}

function detail(name) {
    window.location.href = "productdetail.html?productID=" + name;
}