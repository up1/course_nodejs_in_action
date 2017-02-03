var uri = 'api/task/';

var app = angular.module("todoApp", []);

app.controller("todoCtrl", todoCtrl);

function todoCtrl($scope, $http) {

    $http.get(uri).then( getAll, fail);

    $scope.find = find;

    function find(id) {
        $http.get(uri + id).then(getTask, fail);
    }

    function getAll(result) {
        $scope.tasks = result.data;
    }

    function getTask(result) {
        $scope.result = result.data.id + ' : ' + result.data.name;
        // $scope.tasks = result.data;
    }

    function fail(error) {
        $scope.result = error.data;
    }

}
