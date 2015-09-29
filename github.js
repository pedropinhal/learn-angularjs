(function () {
    
    var github = function ($http) {
        var getUser = function (username) {

            return $http.get("https://api.github.com/users/" + username)
                .then(function (response) { return response.data });
        };

        var getRepos = function(user) {
            return $http.get(user.repos_url)
                .then(function(response) { return response.data });
        };
        var getRepoData = function (username, reponame) {
            var repo;
            var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
            return $http.get(repoUrl)
                .then(function(response) {
                    repo = response.data;
                    return $http.get(repoUrl + "/contributors")
                }).then(function(response) {
                    repo.collaborators = response.data;
                    return repo;
                });
        };
        var getContributors = function(url) {
            return $http.get(url)
                .then(function(response) { return response.data });
            
        };
        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoData: getRepoData,
            getContributors: getContributors
        };
    };

    var module = angular.module("githubViewer");
    module.factory("github", github);
}());