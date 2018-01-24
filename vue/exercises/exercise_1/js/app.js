new Vue ({
  el: '#exercise',
  data: {
    myName: 'Josh',
    myAge: '30',
    lebronJames: 'https://steemit-production-imageproxy-upload.s3.amazonaws.com/DQmfMmzFjT5pvZ8zWxEGRN8WHxFJFQHXYPkQF12DmUbkuPZ'
  },
  methods: {
    timesThree: function() {
      return this.myAge * 3;
    },
    randomFloat: function() {
      return Math.random();
    }
  }
});
