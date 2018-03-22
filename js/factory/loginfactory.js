app.factory('login',function($q,$http){
    var obj = {
        doLogin(data){
            var defer = $q.defer();
            var url = "http://localhost:3000/login";
            $http.post(url,data, {headers: {
                'Content-Type': 'application/json'
            }}).then((data)=>{
                defer.resolve(data.data);
            },(err)=>{
                defer.reject(err);
            });

           return defer.promise; 
        }
    };

    return obj;
});