var myApp = angular.module('flyingCartApp', []);

myApp.directive('addToCartButton', function() {


  function link(scope, element, attributes) {
    element.on('click', function(event){
      var cartElem = angular.element(document.getElementsByClassName("shopping-cart"));
      console.log(cartElem);
      var offsetTopCart = cartElem.prop('offsetTop');
      var offsetLeftCart = cartElem.prop('offsetLeft');
      var widthCart = cartElem.prop('offsetWidth');
      var heightCart = cartElem.prop('offsetHeight');
      var imgElem = angular.element(event.target.parentNode.parentNode.childNodes[1]);
      var parentElem = angular.element(event.target.parentNode.parentNode);
      var offsetLeft = imgElem.prop("offsetLeft");
      var offsetTop = imgElem.prop("offsetTop");
      var imgSrc = imgElem.prop("currentSrc");
      console.log(offsetLeft + ' ' + offsetTop + ' ' + imgSrc);
      var imgClone = angular.element('<img src="' + imgSrc + '"/>');
      imgClone.css({
        'height': '150px',
        'position': 'absolute',
        'top': offsetTop + 'px',
        'left': offsetLeft + 'px',
        'opacity': 0.5
      });
      imgClone.addClass('itemaddedanimate');
      parentElem.append(imgClone);
      setTimeout(function () {
        imgClone.css({
          'height': '75px',
          'top': (offsetTopCart+heightCart/2)+'px',
          'left': (offsetLeftCart+widthCart/2)+'px',
          'opacity': 0.5
        });
      }, 500);
      setTimeout(function () {
        imgClone.css({
          'height': 0,
          'opacity': 0.5
          
        });
        cartElem.addClass('shakeit');
      }, 1000);
      setTimeout(function () {
        cartElem.removeClass('shakeit');
        imgClone.remove();
      }, 1500);
    });
  };


  return {
    restrict: 'E',
    link: link,
		transclude: true,
    replace: true,
    scope: {},
    template: '<button class="add-to-cart" ng-transclude></button>'
  };
});