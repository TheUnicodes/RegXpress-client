(function() {
  angular
    .module('regXpress')
    .controller('LandingPageController', LandingPageController)

  function LandingPageController(ngAudio) {
    const vm = this

    vm.submit = ngAudio.load("app/sounds/shoot.wav");

    vm.playSound = function () {
      vm.submit.play()
    }

  }
}());
