new Vue ({
  el: '#app',
  data: {
    startGame: true,
    inGame:false,
    gameMoves: false,
    youScore: 100,
    monsterScore:100,
    showLog: false,
    messageLog:[],
    endGame: false,
  },
  methods: {
    startNewGame: function() {
    },
    attack: function() {
      var myMove = Math.floor((Math.random() * 10) + 1);
      var monsterMove = Math.floor((Math.random() * 10) + 1);
      this.youScore -= monsterMove;
      this.monsterScore -= myMove;
      this.showLog = true;
      this.messageLog.push('Player hits Monster for ' + myMove);
      this.messageLog.push('Monster hits Player for ' + monsterMove);
    },
    specialAttack: function() {
      var youSpecialMove = Math.floor((Math.random() * 25) + 1);
      var monsterSpecialMove = Math.floor((Math.random() * 15) + 1);
      this.youScore -= monsterSpecialMove;
      this.monsterScore -= youSpecialMove;
      this.showLog = true;
      this.messageLog.push('Player hits Monster for ' + youSpecialMove);
      this.messageLog.push('Monster hits Player for '+ monsterSpecialMove);
    },
    heal: function() {
      var healMe = Math.floor((Math.random() * 15) + 1);
      var monsterMove = Math.floor((Math.random() * 15) + 1);
      this.youScore += healMe;
      this.youScore -= monsterMove;
      this.showLog = true;
      this.messageLog.push('Player heals for ' + healMe);
      this.messageLog.push('Monster hits Player for ' + monsterMove);
    },
    giveUp: function() {
      var yesOrNo = confirm('Are you sure you want to give up?');
      this.endGame = yesOrNo;
      this.inGame = false;
      this.startGame = true;
      this.showLog = false;
      this.messageLog = [];
      this.youScore = 100;
      this.monsterScore = 100;
    }
  }
});
