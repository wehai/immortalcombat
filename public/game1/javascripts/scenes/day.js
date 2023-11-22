import { GameScene } from './example.js';

export class Day extends Phaser.Scene
{
    constructor() {
        super('Day')


    }
    init(data){
        this.visited = data.visited;
        this.day = data.day
 
    }
preload(){


}
create(){
    if(!this.day)
{        console.log("day:", data.dayscore)  
 this.currentday =data.dayscore;
}else{   
    console.log("day:", this.day) 
    this.currentday =  this.day }
    console.log("day:", this.currentday) 
this.matter.add.image(1280/2,1024/2, 'cntr', 0, {  isStatic: true, ignoreGravity: true });
const es = document.getElementById("escore");  
const ps = document.getElementById("pscore");    

if(!this.visited){
ps.innerHTML = data.pscore;
es.innerHTML = data.escore;
}
es.style.display = "block";
ps.style.display = "block";

this.input.keyboard.on('keydown', event =>{

  if(!this.visited){
    this.scene.start('intro',{day: this.currentday})
    es.style.display = "none";
    ps.style.display = "none";
}else{ this.scene.start('GameScene', {day: this.currentday})
es.style.display = "none";
ps.style.display = "none";}

})

}



}
async function getData() {
    return fetch('http://localhost:3000/data/get/game1')
      .then((response) => response.json())
      .then((responseJson) => { return responseJson });
  }
 let data = await getData();
  console.log('current score is ' + data.escore);