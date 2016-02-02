angular.module('uiRouter',['ui.router'])
        .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
            $stateProvider
            .state("home",{
                url: '/',
                templateUrl : 'partials/home.html'
            })
             .state("list",{
                url: '/list',
                templateUrl : 'partials/list.html',
                controller : 'MainCtrl'
            })
            .state("list.item",{
                url: '/:item',
                templateUrl : 'partials/list.item.html',
                controller : 'itemCtrl'
            });
        }])
        .controller('MainCtrl',['$scope',function($scope){
                $scope.shoppingList = [
            {name: 'milk',pic:'img1.jpg'},
            {name:'pencil',pic:'img2.jpg'},
            {name:'meat',pic:'img3.jpg'},
            {name:'car',pic:'img4.jpg'},
            {name:'house',pic:'img5.jpg'}
                ];
                
                $scope.selectItem = function(selectedItem){
                  _($scope.shoppingList).each(function(item){
                      item.selected = false;
                     if (selectedItem === item) {
                         item.selected = true;
                        }
                  });
                };
                
        }]).controller('itemCtrl',['$scope','$stateParams',function($scope,$stateParams){
               var item = $stateParams.item;
             var selectedItem =   _.find($scope.shoppingList,function(list){
                 return list.name === item;   
               });
               $scope.item = selectedItem.pic;
        }]);

