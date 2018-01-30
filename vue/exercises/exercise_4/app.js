new Vue({
  el: '#exercise',
  data: {
    currentClass: 'highlight',
    noClass : false,
    attachRed: false,
    attachBlue: true,
    typeClass: '',
    size:'',
    isWhite:'',
    show:false, //true,
    background:'',
    progress: 0,
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function(){
        vm.currentClass == 'highlight' ? vm.currentClass = 'shrink' : vm.currentClass='highlight';
      }, 3000);
    },
    trueFalse:function() {
      this.isWhite == 'true' ? this.show = true : this.show = false;
    },
    startProgress: function() {
      var timer = this;
      var progress = setInterval(function() {
        timer.progress < 100 ? timer.progress += 10: clearInterval(progress);
      },1000);
    }
  },
});
