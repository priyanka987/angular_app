app.factory('projectServices', function ($http) {
    return {
        get: function () {
			console.log("inside function");
            		return $http.get('/js/modules/users.json');
        }
    };
});

app.factory('projectServices1', function ($http) {
    return {
        get: function () {
            		console.log("inside function");
			return $http.get('/js/modules/task.json');
        }
    };
});

app.factory('projectServices2', function ($http) {
    return {
        get: function () {
            		console.log("inside function");
			return $http.get('/js/modules/project.json');
        }
    };
});

app.factory('userProjectServices', function ($q,$http) {
    return {
        get: function (user_id) {
          var defer = $q.defer();
          var arr = [];
			 $http.get('/js/modules/project.json').success(function(msg){
              			 for(var i=0; i< msg.projects.length;i++){
              				 for(var j=0; j< msg.projects[i].project_members.user_id.length;j++){
       	 	     				if(user_id == msg.projects[i].project_members.user_id[j]){
       	 	     					arr.push(msg.projects[i]);
       	 	      					 
       	 	      				}
       	 	      			}
       	 	      		}
       	 	      		defer.resolve(arr);					
              		});	 
		  return defer.promise;	
        }
    };
});
app.factory('main_service', function ($http) {
    return {
        get: function () {
                     return $http.get('/js/modules/users.json');
        }
    };
});
 
 
 
 







