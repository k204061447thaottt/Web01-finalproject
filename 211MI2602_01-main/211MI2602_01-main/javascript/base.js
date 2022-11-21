var app = angular.module("AngularApp", []);
app.controller('ProductController', function($scope, $http) {
    $http({
        method: "GET",
        url: "../data/products.json"
    }).then(function mySuccess(response) {
            $scope.products = response.data;
        },
        function myError(response) {
            $scope.dataError = response.statusText;
        });
})
app.controller('UserController', function($scope, $http) {
    $http({
        method: "GET",
        url: "../data/users.json"
    }).then(function mySuccess(response) {
            $scope.users = response.data;
        },
        function myError(response) {
            $scope.dataError = response.statusText;
        });
})

// payment function
function decreaseNumber() {
    var quantity = document.getElementById("quantity");
    var price = document.getElementById("price")
    var total_amount = document.getElementById("amount");

    if (quantity.value <= 0) {
        quantity.value = 0;
    } else {
        quantity.value = parseInt(quantity.value) - 1;
    }
    // total amount
    total_amount.innerHTML = quantity.value * parseInt(price.innerText) + ".000đ"
}

function increaseNumber() {
    var quantity = document.getElementById("quantity");
    var price = document.getElementById("price")
    var total_amount = document.getElementById("amount");
    quantity.value = parseInt(quantity.value) + 1;
    total_amount.innerHTML = quantity.value * parseInt(price.innerText) + ".000đ"
}

function openForm() {
    document.getElementById('myForm').style.display = 'flex';
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}