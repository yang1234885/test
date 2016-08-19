/**
 * Created by hxsd on 2016/8/3.
 */
angular.module("myapp").controller("weatherCtrl",function($scope,$http,$ionicLoading){
    var url = "http://wthrcdn.etouch.cn/weather_mini?city=北京";
    //var url = "aa.json";

    $ionicLoading.show();   // 显示网络加载指示器

    $http.get(url).success(function(data){
        $scope.weather = data;
        $ionicLoading.hide();   // 隐藏网络加载指示器
    }).error(function(){
        // 向用户显示一些提示信息
        $ionicLoading.show({
            template:"无法获取天气数据",
            duration:3000
        });
    });
});