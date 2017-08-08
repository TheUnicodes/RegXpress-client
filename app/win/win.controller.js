(function() {
  angular
    .module('regXpress')
    .controller('WinController', WinController);

    function WinController(ngAudio) {
      const vm = this;

      vm.back = ngAudio.load("app/sounds/back.wav");

      vm.backUp = function () {
        vm.back.play()
      }

    }

}());
