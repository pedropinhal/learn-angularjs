(function () {
    var work = function () {
        console.log("work");
    };

    var doWork = function (f) {
        console.log("start");
        f();
        console.log("end");
    };

    doWork(work);

    var createWorker = function () {
        var count = 0;
        var task1 = function () {
            count += 1;
            console.log("task1 " + count);
        }
        var task2 = function () {
            count += 1;
            console.log("task2 " + count);
        }
        return {
            job1: task1,
            job2: task2
        }
    };

    var worker = createWorker();
    worker.job1();
    worker.job2();
    worker.job2();

    var app = angular.module("githubViewer");

    var mainController = function($scope, $interval, $location) {
        var countdownInterval = null;
        var person = {
            firstName: "Pedro",
            lastName: "Pinhal",
            image: "https://pbs.twimg.com/profile_images/1450251569/06-thumb_400x400.jpg"
        }
      
        $scope.search = function (username) {
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
            $location.path("/user/" + username);
        };

        var decrementCountdown = function () {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        };

        var startCountdown = function () {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };


        $scope.person = person;
        $scope.username = "angular";
        $scope.countdown = 5;

        startCountdown();


    };

    app.controller("mainController", ["$scope",  "$interval", "$location", mainController]);
}());
