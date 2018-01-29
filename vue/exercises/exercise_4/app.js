new Vue({
  el: '#exercise',
  data: {
    currentClass: 'highlight',
    noClass : false,
    attachRed: false,
    attachBlue: true,
    typeClass: '',
    size:'',
    isWhite:false,
    show:false //true
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function(){
        vm.currentClass == 'highlight' ? vm.currentClass = 'shrink' : vm.currentClass='highlight';
      }, 3000);
    },
    trueFalse:function() {
      console.log(this.show);
      this.isWhite = true ? this.show = true : this.show = false;
      this.isWhite = false ? this.show = false : this.show = true;
      console.log(this.show);
    }
  }
});
