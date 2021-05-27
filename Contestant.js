class Contestant {
    constructor(){
      this.index = null;
      this.answer = 0;
      this.name = null;
      this.input1 = createInput("Enter Your Name");
      this.input2 = createInput("Enter Correct Option No..");
      this.button = createButton('Submit');
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestantCount/contestants" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getContestantInfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }

    

}