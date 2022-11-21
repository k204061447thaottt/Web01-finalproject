let urlparams = new URLSearchParams(location.search);
var id = urlparams.get('productID');
let app = angular.module("AngularApp", ['angularUtils.directives.dirPagination']);
app.controller("DetailController", function($scope, $http) {
    $http({
        method: "GET",
        url: "../data/products.json"
    }).then(
        function success(response) {
            $scope.carts = [];
            var quantity = document.getElementById("quantity");
            $scope.products = response.data;
            $scope.selectProduct = response.data.find(function(value) {
                return value.name == id;
            })
            $scope.add_cart = function(product) {
                if (product) {
                    $scope.carts.push({ name: product.name, price: product.price * quantity.value });
                }
            }
            $scope.total = 0;
            $scope.setTotals = function(cart) {
                if (cart) {
                    $scope.total += (cart.price * 1);
                }
            }
            $scope.remove_cart = function(cart) {
                if (cart) {
                    $scope.carts.splice($scope.carts.indexOf(cart), 1);
                    $scope.total -= cart.price;
                }
            }
            $scope.bs = 'bestseller';
            $scope.type2 = false;
            $scope.type1 = true;
            $scope.selectCategory0 = function() {
                $scope.code = '';
                $scope.type2 = false;
                $scope.type1 = true;
            }
            $scope.selectCategory1 = function() {
                $scope.code = 'Thảm, rèm cửa';
            }
            $scope.selectCategory2 = function() {
                $scope.code = 'Phụ kiện trang trí';
                $scope.type2 = true;
                $scope.type1 = false;
            }
            $scope.selectCategory3 = function() {
                $scope.code = 'Nội thất tiện ích';
                $scope.type2 = true;
                $scope.type1 = false;
            }
            $scope.selectCategory4 = function() {
                $scope.code = 'Phụ kiện khác';
                $scope.type2 = true;
                $scope.type1 = false;
            }
            $scope.selectCategory5 = function() {
                $scope.code = "Cây giả trang trí";
                $scope.type2 = true;
                $scope.type1 = false;
            }
        },
        function error(response) {
            $scope.error = response.statusText;
        }
    )
})
app.controller("CategoryController", function($scope, $http) {
    $http({
        method: "GET",
        url: "../data/category_product.json"
    }).then(
        function success(response) {
            $scope.categorys = response.data;
            // $scope.selectProduct = response.data.find(function(value) {
            //     return value.name == id;
            // })
        },

        function error(response) {
            $scope.error = response.statusText;
        }
    )
})

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