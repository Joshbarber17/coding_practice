new Vue ({
  el: '#app',
  data: {
    startGame: true,
    inGame:false,
    gameMoves: false,
    youScore: 100,
    monsterScore:100,
  },
  methods: {
    attack: function() {
      var myMove = Math.floor((Math.random() * 10) + 1);
      var monsterMove = Math.floor((Math.random() * 10) + 1);
      this.youScore -= myMove;
      this.monsterScore -= monsterMove;
    }
  }
});
