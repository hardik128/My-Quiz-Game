var canvas,database,gameState=0,contestantCount=0,quiz,question,player;



function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz()
  quiz.getState();
  quiz.start();
  
  
  
}


function draw(){
  background(0,200,250)
  quiz.updateContestant();
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  console.log(gameState)
}
