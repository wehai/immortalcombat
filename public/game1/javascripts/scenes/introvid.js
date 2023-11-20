export class intro extends Phaser.Scene
{
    constructor() {
        super('intro')
this.vidplayed = false;
    }
    init(data){
this.day = data.day
    }
create(){
    
    console.log("introvid")
const vid = document.getElementById("intro");

vid.style.display = "block";
vid.style.zIndex = "2";
vid.currentTime = 0;
vid.play();
vid.onended = function() {
  intro.vidplayed = true; };

this.input.keyboard.on('keydown', event =>{


    vid.style.zIndex = "-2";
    vid.style.display = "none";
    this.scene.start('GameScene', {day: this.day}) 
  })

}

update(){
  console.log(intro.vidplayed)
  if(intro.vidplayed){

    this.scene.start('GameScene', {day: this.day})
    intro.vidplayed= false;
  }
}


}