var app = angular.module("todo",[]);
app.controller("ctrl",function($scope){
     $scope.item = [];
     $scope.additem = function(){
       $scope.errortext = "";
           if (!$scope.newitem) {
           return;}
           if ($scope.item.indexOf($scope.newitem) == -1) {
               $scope.item.push($scope.newitem);
               $scope.newitem="";
           } else {
               $scope.errortext = "The item is already in your shopping list.";
           }
       }
     $scope.removeitem = function(x){
        $scope.errortext = "";
         $scope.item.splice(x,1);
     }

      $scope.showMe = false;
  $scope.myFunc = function() {
      $scope.showMe = !$scope.showMe;
    }
});



$("#ip1").keypress(function(e){
  if(e.which == 13) {
        additem();
    }
});
