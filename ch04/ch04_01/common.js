/**
 * Created by ZhangQuan on 2018/3/28.
 */
var loginModule = angular.module("loginModule", []);
loginModule.controller("UserController", function ($scope, $log) {

    $scope.uname = "login";
    $scope.passwd = "admin";
    $scope.submit = function () {
        alert("Login Module: UserController");
    }
});

var registerModule = angular.module("registerModule", []);
registerModule.controller("UserController", function ($scope, $log) {
    $scope.uname = "register";
    $scope.passwd = "admin";
    $scope.submit = function () {
        alert("Register Module: UserController");
    }
})