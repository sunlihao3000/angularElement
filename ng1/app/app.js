(function () {
  var app = angular.module('hello-world-app', ['ng1WebComponents']);
  app.component('greetUser', {
    template: '<greet-ce-wrapper ></greet-ce-wrapper>',
    controller: function GreetUserController() {

    }
  });
})();
