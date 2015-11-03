/**
 * Dependencies:-
 * 1. Angular JS
 */
app.controller("fileController",["$scope", function($scope){
	$scope.image="";
}]);
app.directive("fileUpload",[function(){
    	return {
    		restrict: 'E',
    		transclude: true,
    		scope: {
    			
    		},
    		//controller:"fileController",
    		template: function (elem, attr) {
    			return '<div style="position:relative;width:' + attr.width + 'px;height:' + attr.width +'px">'
    			+ '<input type="file" style="position:absolute;top:0;bottom:0;left:0;right:0;'
    			+ 'opacity:0.001;cursor:pointer;" >'
    			+ '<img alt="' + attr.title + '" src="{{image}}" style="width:' + attr.width + 'px;height:' + attr.width +';"></div>'
    		},
    		link: function (scope, element, attributes) {
    			scope.image=attributes.image;
                element.bind("change", function (changeEvent) {
                    alert(scope.image);
                    scope.image="test";
                });
            }
    	}
    }]);