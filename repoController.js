(function() {
    var app = angular.module("githubViewer");

    var repoController = function ($scope, github, $routeParams) {
        var onError = function (reason) {
            $scope.error = "Couldn't fetch the repo / contribs";
        };

        var onRepoDataComplete = function (data) {
            $scope.repo = data;
        };

        $scope.username = $routeParams.username;
        $scope.repository = $routeParams.repository;
        github.getRepoData($scope.username, $scope.repository)
            .then(onRepoDataComplete, onError);

    };

    app.controller("repoController", ["$scope", "github", "$routeParams", repoController]);

})();