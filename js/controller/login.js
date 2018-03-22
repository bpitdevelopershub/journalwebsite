app.controller('loginController', function($scope,login) {
    $scope.user = {
        email:'',
        password:''
    };
    $scope.login = () => {
        var promise = login.doLogin($scope.user);
        promise.then((data)=>{
            $scope.myData = data.message;
            console.log($scope.myData);
        },(err)=>{
            $scope.errorMessage = err;
        });
    }
});