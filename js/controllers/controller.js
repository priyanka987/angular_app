app.controller('userController', function($scope,$routeParams,projectServices) {
$scope.user_id = $routeParams.user_id;
console.log($scope.user_id);
     projectServices.get().then(function (msg) {
       	 $scope.msg = msg;
     }); 
}); 
app.controller('taskController', function($scope,projectServices1) {
   projectServices1.get().then(function (msg1) {
        $scope.msg1 = msg1;
        console.log(msg1);
    }); 
}); 
app.controller('projectController', function($scope,projectServices2) {
   projectServices2.get().then(function (msg2) {
        $scope.msg2 = msg2;
        console.log(msg2);
    });
 });  
app.controller('user_project_controller', function($scope,$routeParams,userProjectServices) {
		$scope.user_id = $routeParams.user_id;
    		userProjectServices.get($scope.user_id).then(function (msg) {
       	 		$scope.msg = msg;
       	 	
       	 });	
});
app.controller('main_controller', function ($rootScope,main_service,userProjectServices ) {
	$rootScope.userData=function(data){
		userProjectServices.get(data).then(function (userProj) {
         		$rootScope.userProj = userProj;
         		console.log(userProj);
		});
	}
	main_service.get().then(function (msg) {
         	$rootScope.msg = msg;
         	console.log($rootScope.msg);
	});
	
});



