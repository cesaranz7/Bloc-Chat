(function() {
    function HomeCtrl(Room) {
      this.allRooms = Room.all;
    }

    angular
        .module('Bloc-Chat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
