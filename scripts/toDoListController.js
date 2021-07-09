var toDoListApp = angular.module("toDoListApp",["LocalStorageModule"]);

toDoListApp.controller('toDoListController', function ($scope, localStorageService) {
  $scope.todo = [];
  
  if (localStorageService.get("angular-todoList")) {
      $scope.todo = localStorageService.get("angular-todoList");
  } else {
      $scope.todo = [];
  }
  
  /* {
      actividad: 'Terminar la app del TODO List',
      fecha: '2021-07-05'
  } */
  
  /* $scope.$watch(function() {
      return $scope.newActv;
  }, function(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
  }); */
  
  $scope.$watchCollection('todo', function(newValue, oldValue) {
      localStorageService.set("angular-todoList", $scope.todo);
  });

  $scope.addActv = function () {
      $scope.todo.push($scope.newActv);
      $scope.newActv = {};
      localStorageService.set("angular-todoList", $scope.todo);
  }
  $scope.clean = function () {
      $scope.todo = [];
      localStorageService.set("angular-todoList", $scope.todo);
  }
});
