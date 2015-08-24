var app = angular.module('yoyoDirectiveApp', [])

app.controller('YoyoController', ['$scope', function($scope) {
  $scope.yoyo = [
    {name: 'Duncan Metal Drifter',
    img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"},
    {name: 'Zoomer',
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRBQ3-X1Umz1DCab5ijWWQLCPkB3ZxM67V5MOExzC7yx1uo072P"},
    {name: 'Metallic Missle',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmby7dTqEztQH51JuqMTAugfMopXjTzGR6q0LS2G7VL-iyJUI"},
    {name: 'Duncan Butterfly', img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpacvAy9fCG9JsBbs4TM2tP4AO7u5WchkRc3oegoRTU96sxKYi"}
];
}]);

app.directive('gsYoyoDetails', function() {
  return {
    templateUrl: 'yoyo-details.html',
    scope: {
      yoyo: '=yoyoData'
    }
  };
});






// var app = angular.module('simpleDirectiveApp', [])
// app.directive('gsAngularLogo', function() {
//   return {
//     restrict: 'E',
//     // template: '<img src="https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png">'
//     templateUrl: 'myDirective.html'
//   };
// });
