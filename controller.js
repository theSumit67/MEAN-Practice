myApp.controller('myCtrl', function ctrl($scope) {
    $scope.author = {
        'name': 'here i am',
        'company': ' handlebars'
    }
});

myApp.controller('formCtrl', function ctrl($scope, nameService) {

    $scope.formSubmit = function(newMsg) {
        $scope.update = newMsg;
    }
});

myApp.controller('ngCommonCtrl', function ctrl($scope, $log) {
	$log.info($log);
});
myApp.controller('directiveCtrl', function ctrl($scope, $log) {
	
});

myApp.controller('servicesCtrl', function ctrl($scope, nameService) {
	$scope.name = nameService.name;
	// name var in nameService wont update automatically so add this to every ctrl which uses this services
	$scope.$watch('name', function(){
		nameService.name = $scope.name;
	});
});

myApp.controller('crudCtrl', function ctrl($scope, $http, $location) {
	
	function loadUsers () {
		$http.get('/api/users').success(function (response) {
			$scope.users = response;
		});
	}
	loadUsers();

	$scope.deleteIt = function ( objID ){
		$http.get('/api/users/delete?id='+ objID).success(function (response) {
			loadUsers(); // update scope.user			
		});
	}
});
