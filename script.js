var app = angular.module('myApp', ['ngTouch']);

app.controller('ClickCtrl', [
  '$scope',
  function($scope) {
    $scope.clickHandler = function(event, name) {
      $scope.x = event.pageX || event.clientX || 'nothing!';
      $scope.y = event.pageY || event.clientY || 'nothing!';
	  
	  alert(name);
	  
	  var c = bodyObj;
	  
	  var ctx = c.getContext("2d");
	  ctx.beginPath();
      ctx.moveTo(26, 261);
      ctx.bezierCurveTo(459, 257, 205, 176, 464, 180);
      ctx.stroke();
	  	  		
    }
  }
]);


// JavaScript Document