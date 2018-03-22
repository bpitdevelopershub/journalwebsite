app.controller('loginController', function($scope, $rootScope, $window, login) {
    $scope.user = {
        email:'',
        password:''
    };
    $scope.login = () => {
        var promise = login.doLogin($scope.user);
        promise.then((data)=>{
            $scope.myData = data;
            console.log($scope.myData);
            $rootScope.loginCheck = true;
        },(err)=>{
            $scope.errorMessage = err;
        });
    }

    $rootScope.loginCheck = false;
});