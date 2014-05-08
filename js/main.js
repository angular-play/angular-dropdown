var app = angular.module("Test", []);

app.controller("HomeController", function($scope){

  function Product() {
    this.name = "Product";
    this.desc = "Description";
    this.color = "A";
  }

  function init() {
    for(var i =0;i< 10;i++){
      var product = new Product();
      product.name += "-" + i;
      $scope.products.push(product);
    }
  }

  $scope.products = [];

  $scope.colors = ["A", "B", "C"];

  $scope.show = function() {
    $scope.products.forEach(function(product){
      console.log(product);
    });
  }

  init();

});
