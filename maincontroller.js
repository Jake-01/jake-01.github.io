app.controller("MainController", ['$scope',  function($scope) {
	 

  

    $scope.pers = [
		{
			person: 'Nick',
			name: 'name',
            
			
		},
		{
			person: 'Greg',
			name: 'name'
            
			
		}
	];


    $scope.changeClassIn = function(pers){
    	if (pers.name === "name")
   			pers.name = "name-in";
    	else if (pers.name === "name-out")
    		pers.name = "name-in";
    	else if (pers.name === "name-onsite")
    		pers.name = "name-in"
    	else
    		pers.name = "name-in";
    };
	
	$scope.changeClassOut = function(pers){
    	if (pers.name === "name")
   			pers.name = "name-out";
    	else if (pers.name === "name-in")
    		pers.name = "name-out";
    	else if (pers.name === "name-onsite")
    		pers.name = "name-out"
    	else
    		pers.name = "name-out";
    };

    $scope.changeClassOnsite = function(pers){
    	if (pers.name === "name")
   			pers.name = "name-onsite";
    	else if (pers.name === "name-in")
    		pers.name = "name-onsite";
    	else if (pers.name === "name-out")
    		pers.name = "name-onsite"
    	else
    		pers.name = "name-onsite";
    };

    $scope.guests = [ 
    
    ];

    


    $scope.update = function(user) {
        $scope.guests.push({guest: user.guest, company: user.company});
      };

    $scope.removeItem = function(index){
      $scope.guests.splice(index, 1);
    }
    
    $scope.GL = true;
    $scope.toggle = true;
    
    

}]);
