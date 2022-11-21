let urlparams = new URLSearchParams(location.search);
var id = urlparams.get('productID');
let app = angular.module("AngularApp", ['angularUtils.directives.dirPagination']);
app.controller("DetailController", function($scope, $http) {
    $http({
        method: "GET",
        url: "../data/blog.json"
    }).then(
        function success(response) {
            $scope.blogs = response.data;
            $scope.selectProduct = response.data.find(function(value) {
                return value.name == id;
            })
        },
        function error(response) {
            $scope.error = response.statusText;
        }
    )
})