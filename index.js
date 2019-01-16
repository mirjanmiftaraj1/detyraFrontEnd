var app = angular.module("myApp", []); 
app.controller("myCtrl", function($scope, $http) {
    $scope.firstDiv = true
    $scope.badCredentials = false
    $scope.show = false
    $scope.showFalse = false
    $scope.userNotFound = false;
    
    $scope.gitHub = function (parameters) {
        var token = parameters.token;
        var username = parameters.username;
        $http({
        method: 'GET',
        url: "../../githubApi/index.php?user="+username+"&token="+token
        }).then(function successCallback(response) {
            if(response.data == '"Bad credentials"') {
                $scope.badCredentials = true;
            }

            if(response.data == '"Not Found"') {
                $scope.userNotFound = true;
            }
            if(response.data == '"user not exist"') {
                $scope.userNotFound = true;
            }
            if(response.data != "") {
                $scope.firstDiv = false
                $scope.show = true
                $scope.data = response.data
            }
        }, function errorCallback(response) {
        });
    } 
});