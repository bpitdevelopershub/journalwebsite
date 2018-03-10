var app = angular.module('app',[]);
app.constant("urlhit",'http://localhost:3000/fake.json');
app.controller('emp',['$scope','$http','$q','urlhit',function($scope,$http,$q,urlhit){
    // $scope.data = info array
    var defer = $q.defer();
                                
                                $http({
                                    url :urlhit,
                                    method : 'GET'
                                    })
                                    .then(function(res){
                                    //console.log(res.data.info);
                                    defer.resolve(res.data.data);
                                    console.log('data taken');
                                    })


                                                    defer.promise.then(function(data){
                                                    console.log('storing');
                                                    $scope.data = data;
                                                    console.log($scope.data);
                                                });
            
    

}]);
   


app.directive('pdfDownloadLink',function($http){
  return {  
     link :function(scope,ie,ia){
             ie.on("click",()=>{
                 
                 console.log(ia.pdfurl);
                    ie.attr({
                    target : '_blank',
                    // location of file
                    href   : ia.pdfurl
                   });
                 
             })
          
     },

     
     controller : function($scope){
     //   console.log($scope.name);
}



    }
});

