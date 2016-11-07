angular.module('app.controllers', [])

.controller('surveyCtrl', ['$scope', '$stateParams', 'Survey', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

function ($scope, $stateParams, Survey, $ionicPopup) {

   $scope.data={
     nome: '',
     favorite_color:'Orange',
     favorite_pizza:'pepperoni'
   }
   $scope.submitting = false;

   $scope.submit = function(){
     $scope.submitting = true;
     Survey.add($scope.data).then(function(){
       $scope.data={
         nome: '',
         favorite_color:'Orange',
         favorite_pizza:'pepperoni'
       }
       $scope.submitting = false;
       $ionicPopup.alert({
         title:'Obrigado',
         template: 'Volte sempre',
       });

     })
   }


}])

.controller('resultsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('searchCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
