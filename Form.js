class Form{
    constructor(){
     this.input=createInput('Username');
     this.button=createButton('PLAY');
     this.title=createElement('h2');
     this.greeting=createElement('h2');
     this.reset=createButton('Reset');   
    }
    hide(){
    this.greeting.hide();
    this.button.hide();
    this.title.hide();
    this.input.hide();
    }
    display(){
        this.title.html("Savior");
        this.title.position(1300,200);

        this.input.position(600,200);
        this.button.position(600,300);
        this.reset.position(1000,340);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      
    });
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        });
    }
}