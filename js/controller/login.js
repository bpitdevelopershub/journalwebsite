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
            $window.location = "/#/journal";
        },(err)=>{
            $scope.errorMessage = err;
            alert('Invalid Data');
        });
    }

    $rootScope.loginCheck = false;
});