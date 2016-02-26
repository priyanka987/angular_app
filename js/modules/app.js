var app = angular.module('sampleApp', ["ngRoute"]);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
	when('/users', {
		controller: 'userController',
		templateUrl: '../views/users.html'
	}).when('/task', {
		templateUrl: '../views/task.html',
		controller: 'taskController'
	}).when('/project', {
        	templateUrl: '../views/project.html',
        	controller: 'projectController'
	}).when('/user/:user_id/project', {
		controller: 'user_project_controller',
		templateUrl: '../views/user_project.html'
	}).when('/',{
		controller: 'main_controller',
		templateUrl: '../index.html'
	})
}]);








