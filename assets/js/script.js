AOS.init();

var app = angular.module("todo",[]);
app.controller("ctrl",function($scope, $interval){
     $scope.item = [];
     $scope.additem = function(){
           if (!$scope.newitem) {
               alert("WARNING : You must enter some task");
                 return;
            }
           if ($scope.item.indexOf($scope.newitem) == -1) {
               $scope.item.push($scope.newitem);
               $scope.newitem="";
           } else {
               alert("WARNING : This item is already exist.");
                $scope.newitem="";
           }
       }
     $scope.removeitem = function(x){
         $scope.item.splice(x,1);
     }

      $scope.showMe = false;
  $scope.myFunc = function() {
      $scope.showMe = !$scope.showMe;
    }

      $scope.date = new Date();

      $scope.time = new Date().toLocaleTimeString();

      $scope.theTime = new Date().toLocaleTimeString();
      $interval(function () {
          $scope.theTime = new Date().toLocaleTimeString();
      }, 1000);

});


$("#ip1").keypress(function(e){
   var key = e.which;
   if (key === 13) {
      additem();
  }
 });

 function day() {
     var d = new Date();
     var weekday = new Array(7);
     weekday[0] = "Sunday";
     weekday[1] = "Monday";
     weekday[2] = "Tuesday";
     weekday[3] = "Wednesday";
     weekday[4] = "Thursday";
     weekday[5] = "Friday";
     weekday[6] = "Saturday";

     var n = weekday[d.getDay()];
     document.getElementById("show").innerHTML = n;
 }
