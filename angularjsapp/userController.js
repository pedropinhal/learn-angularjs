(function () {
    var app = angular.module("githubViewer");

    var userController = function ($scope, github, $routeParams) {
        var onRepos = function (data) {
            $scope.repos = data;
            console.log($scope.repos);
        }

        var onError = function (reason) {
            $scope.error = "Couldn't fetch the user";
        };

        var onUserComplete = function (data) {
            $scope.user = data;
            github.getRepos(data)
                .then(onRepos, onError);
        };

        $scope.username = $routeParams.username;
        $scope.repoSortOrder = "-stargazers_count";
        github.getUser($scope.username).then(onUserComplete, onError);
    };

    app.controller("userController", ["$scope", "github", "$routeParams", userController]);
}());