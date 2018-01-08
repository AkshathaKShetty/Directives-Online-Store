var myLogin = angular.module("myLogin", []);
myLogin.controller("LoginPageCtrl", function ($scope, $state) {
    $scope.onSubmit = function (txtusername, txtpassword) {
        //alert(txtusername,txtpassword);    
        $scope.Users = [{ username: "admin", password: "1" },
                            { username: "akshatha", password: "2" }];
        $scope.count = $scope.Users.length;
        var login = false;
        //if($scope.Users != null){
        //$scope.count = $scope.Users.length;  
        //while(login==false)
        //{
        //for (var i=0; i< $scope.count; i++)
        //    {            
        if ($scope.Users[0].username == txtusername && $scope.Users[0].password == txtpassword) {
            $state.go('Home');
            login = true;
        }
        //}
        // }

    };


    //  $scope.addUser = function () {    
    //$scope.Userlist.push({ 'username': $scope.username, 'password': $scope.password});    
    //getLocalStorage.updateUserData($scope.Userlist);                 
    //$scope.count = $scope.Userlist.length;        
    //};

});


