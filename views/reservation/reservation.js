/**
 * Created by hxsd on 2016/8/3.
 */
angular.module("myapp").controller("reservationCtrl",function($scope){
    $scope.reservation = {
        room: "1316",
        checkin: new Date(),
        checkout: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        wifi:"hello",
        price:168.00
    };
});