'use strict';

describe('Controller: mainCtrl', function () {

  // load the controller's module
  beforeEach(module('mainController'));

  var mainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    mainCtrl = $controller('mainCtrl', {
      $scope: scope
    });
  }));

  describe('when searching for packets', function() {
	  beforeEach(function() {
		  scope.search;
	  });
	  
	  it('should be set to true', function() {
		  expect(scope.showResults).to.equal(true);
	  });
  })
  

});
