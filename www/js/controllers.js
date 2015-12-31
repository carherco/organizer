angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ItemsCtrl', function($scope) {
    $scope.users = [
        {id: 1, name: 'Carlos' },
        {id: 2, name: 'Nacho' },
        {id: 3, name: 'Elena' },
        {id: 4, name: 'Isa A.' },
        {id: 5, name: 'Isa C.' },
        {id: 6, name: 'Vero' }
    ];
            
            
    $scope.items = [
        {id: 1, item: 'Coca-cola (3l)', user: 1, price: 3.58 },
        {id: 2, item: 'Comida', user: 2, price: 0 },
        {id: 3, item: 'Desayuno', user: 4, price: null },
        {id: 4, item: 'Postre', user: null, price: null },
        {id: 5, item: 'Cubiertos', user: 2, price: 4.25 },
        {id: 6, item: 'Hielos', user: 6, price: 2 }
    ];
    
    $scope.count = 6;
    
    $scope.getTotal = function(){
        var total = 0;
        for(count=0;count<$scope.items.length;count++){
            if($scope.items[count].price!==null) {total += $scope.items[count].price;}
        }
        return total;
    };
    
    $scope.newitem = {
        id: null,
        item: null,
        user: null,
        price: null
    };
    
    $scope.edititem = {
        id: null,
        item: null,
        user: null,
        price: null
    };
    
    $scope.addItem = function() {
        $scope.newitem.id = $scope.count+1;
        $scope.items.push($scope.newitem);
        $scope.count += 1;
        $scope.newitem = {
            id: null,
            item: null,
            user: null,
            price: null
        };
    };

    $scope.selectItem = function(item) {
        var previousitem = $scope.edititem;
        $scope.edititem = item;
        console.log($scope.edititem.user);
    };

    $scope.removeItem = function(index){
        $scope.items.splice(index,1);
    };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
