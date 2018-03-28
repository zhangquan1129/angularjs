/**
 * Created by ZhangQuan on 2018/3/29.
 */
var app = angular.module("app", []);
app.controller("FirstController", function ($scope, $log) {
    $log.info("FirstController: name → " + $scope.name);
    $log.info("FirstController: age → " + $scope.age);
})