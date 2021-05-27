class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        console.log(gameState)
        var contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
          console.log(contestantCount)
        }
        console.log(contestantCount)
        question = new Question()
        question.display();
      }
    }
    
    play(){
        question.hide();
        background(20,200,100);
        fill(0);
        
        Contestant.getContestantInfo();
        if(allContestants !== undefined){
          
          var displayAnswers = 230;

          for(var plr in allContestants){
            var correctAnswer = "2";
            if (correctAnswer === allContestants[plr].answer)
              fill("Green")
            else
              fill("red");
    
            displayAnswers+=30;
            textSize(20);
            text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,displayAnswers)
          }
        }
      }
    

}
