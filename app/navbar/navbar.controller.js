(function() {
  angular
    .module('regXpress')
    .controller('NavbarController', NavbarController)

  function NavbarController(ngAudio) {
    const vm = this

    vm.home = ngAudio.load("app/sounds/back.wav")

    vm.goHome = function () {
      vm.home.play()
    }
  }
}());
