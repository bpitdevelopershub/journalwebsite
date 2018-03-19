app.controller('login',['$scope','$http','$q','loginurlhit','$location',function($scope,$http,$q,loginurlhit,$location){
    // $scope.data = info array
    var defer = $q.defer();
                                
                                $http({
                                    url :loginurlhit,
                                    method : 'GET'
                                    })
                                    .then(function(res){
                                    //console.log(res.data.info);
                                    defer.resolve(res.data.data);
                                    //console.log('data taken');
                                    })


                                                    defer.promise.then(function(data){
                                                  //  console.log('storing');
                                                    $scope.data = data;
                                                    console.log($scope.data);
                                                });

            $scope.checkvalidity=function(){
                var iemail = $scope.email;
                var ipassword ;
                for(let i=0;i<$scope.data.length;i++){

                    if($scope.data[i].email===$scope.email){
                         ipassword = $scope.data[i].password;
                    }
                }

                if(ipassword===$scope.password){
                    console.log("valid");
                    // here put upload
                    $location.path('/search');
                }
                else{
                    console.log("wrong email or password");
                }
        }
}]);
