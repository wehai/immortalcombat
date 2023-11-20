import { GameScene } from './example.js';

export class GO extends Phaser.Scene
{
    constructor() {
        super('GO')

    }
    init(data){
        this.playerwon = data.won
    }

preload(){
    this.load.image('eawon', 'assets/eaglewins.png');
    this.load.image('prwon', 'assets/prometwins.png');

}
create(){
    data.dayscore = data.dayscore+1;
    console.log(data.dayscore)
    const text = document.getElementById("textbox");  
    text.style.display = "none";
    const backk = document.getElementById("backk");
    const es = document.getElementById("escore");  
    const ps = document.getElementById("pscore");    
es.style.left = "100px";
es.style.top = "100px";
ps.style.top = "100px";
ps.style.left = "1150px";
    es.style.display = "block";
    ps.style.display = "block";
    ps.innerHTML = data.pscore;
    es.innerHTML = data.escore;

    console.log("game over")
    //this.matter.add.image(1280/2,1024/2, 'eawon', 0, {  isStatic: true, ignoreGravity: true });
    console.log(this.playerwon)
if(this.playerwon == "eagle"){
 this.matter.add.image(1280/2,1024/2, 'eawon', 0, {  isStatic: true, ignoreGravity: true });
 data.escore = data.escore+1;
 setData(data); 
  es.innerHTML = data.escore;
   
}else if(this.playerwon == "promi"){
    this.matter.add.image(1280/2,1024/2, 'prwon', 0, {  isStatic: true, ignoreGravity: true });
    data.pscore = data.pscore+1;
 setData(data); 
  //data = setData(data);
  ps.innerHTML = data.pscore;

}

setTimeout(() => {
         
    this.scene.start('Day', {visited: true, day: data.dayscore})
    es.style.left = "320px";
es.style.top = "180px";
ps.style.top = "180px";
ps.style.left = "890px";
    es.style.display = "none";
    ps.style.display = "none";
      
     }, 5000)


/* this.input.keyboard.on('keydown', event =>{

  
    this.scene.start('Day')


}) */
console.log('current score is ' + data.escore);
}



}

async function getData() {
    return fetch('http://localhost:3000/data/get/game1')
      .then((response) => response.json())
      .then((responseJson) => { return responseJson });
  }
  
  async function setData(data) {
    return fetch('http://localhost:3000/data/set/game1', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((responseJson) => { return responseJson });
  }
  
  let data = await getData();
  console.log('current score is ' + data.escore);
/*   
 display:none;
  left: 840px;
  top: 180px;
  position:fixed;
  font-size: 80px;
  color:#c48637;
  z-index: 3;


  data.score = Math.round(Math.random() * 100)
  data = await setData(data);
  console.log('score updated to ' + data.score); */