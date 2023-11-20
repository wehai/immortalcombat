

export class GameScene extends Phaser.Scene
{
    constructor() {
        super('GameScene')

        this.notfirstvisit =false;
      this.shoutcount;
      this.peecount;
      this.graphics;
      this.points;
      this.curve;
      this.path;
      this.pee;
      this.music;
      this.pee1;
      this.pee2;
      this.pee3;
      this.pee4;
      this.peeposx;
      this.peeposy;
      this.shouting;
      this.peeing;
      this.point0;
      this.startPoinwt;
      this.peex;
      this.peey;
      this.beeingatt;
      this.beeingattclaw;
      this.fastatt;
      this.clawatt;
      this.rect;
      this.promi;
      this.promicolli;
      this.eagle;
      this.stars;
      this.bombs;
      this.platforms;
      this.cursors;
      this.touchtime;
      this.liver;
      this.bladder;
      this.schlagfertigkeit;
      this.gameOver;
      this.scoreText;
      this.insultText;
      this.bladderText;
      this.insults;
      
      
      this.selfesteem;
      this.energy;
      this.energyText;
      this.selfText;
      this.tween;

      this.pwon
      this.ewon
   
    }

    init(data){
      this.day = data.day;
      this.shoutcount = 0;
      this.peecount =0;
      this.shouting = false;
      this.peeing = false;
      this.peex = 800;
      this.peey = 200;
      this.beeingatt = false;
      this.beeingattclaw = false;
      this.fastatt = false;
      this.clawatt = false;
      this.touchtime =0;
      this.liver = 500;
      this.bladder = 99;
      this.schlagfertigkeit = 8;
      this.gameOver = false;
      this.selfesteem = 500;
      this.energy = 99;
      this.energyfr = 99;
      this.insults =[
        "YOU'RE SO STUPID YOU BELIEVE THE PHILOSOPHY WILL FREE YOU FROM THE PLATO'S CAVE",
        "YOU DON'T KNOW THAT YOU KNOW NOTHING",
        "YOU WORSHIP DOGS",
        "I'VE HEARD YOU LIKE WOMEN",
        "YOU BELIEVE IN DAIMONION",
        "YOUR TASTE IS SO BAD YOU ARE SATISFIED WITH DEUS EX MACHINA",
        "IS THAT TRUE THAT HOMER GOT BLIND CUZ HE SAW YOU NAKED?",
        "HOW DID YOUR HOLIDAYS IN TROY HOTEL GO?"];
    }

   preload(){

    this.load.audio('theme', 
    'assets/sound/eagle/wings.wav'
);
this.load.audio('cry', 
    'assets/sound/eagle/cry.wav'
);
this.load.audio('ecry', 
    'assets/sound/eagle/eagle.wav'
);
this.load.audio('ahh', 
    'assets/sound/prometheus/ahh.wav'
);
this.load.audio('pui', 
    'assets/sound/prometheus/pee.wav'
);
this.load.audio('mukke', 
    'assets/sound/music.wav'
);

this.load.video('backk', 'assets/background1.mp4', 'loadeddata', false, true);

this.load.image('world', 'assets/world.png');
this.load.image('pomi', 'assets/prometheus.png');
this.load.image('bars', 'assets/platform.png');
this.load.image('star', 'assets/star.png');
this.load.image('bomb', 'assets/bomb.png');
this.load.image('peee', 'assets/pissdrop.png');
this.load.image('liveric', 'assets/liver.png');
this.load.image('birdic', 'assets/birdicon.png');

this.load.spritesheet('egal', 'assets/birdfly_orange-0.png', { frameWidth: 500, frameHeight: 500});
this.load.spritesheet('bite', 'assets/birdbite.png', { frameWidth: 500, frameHeight: 500});
this.load.spritesheet('kick', 'assets/birdkickorange.png', { frameWidth: 500, frameHeight: 500});

this.load.json('maskpromi', 'assets/maskpromi.json');
this.load.spritesheet('idle', 'assets/idle.png', { frameWidth: 1025, frameHeight: 1024});
this.load.spritesheet('hurt', 'assets/hurt.png', { frameWidth: 1024, frameHeight: 1024});
this.load.spritesheet('shout', 'assets/shout.png', { frameWidth: 1024, frameHeight: 1024});
this.load.spritesheet('pee', 'assets/pee.png', { frameWidth: 1024, frameHeight: 1024});

this.load.spritesheet('barinsults', 'assets/bars/texture.png', { frameWidth: 600, frameHeight: 400,startFrame: 0,endFrame: 8 });
this.load.spritesheet('barbladder', 'assets/bars/texture-0.png', { frameWidth: 600, frameHeight: 400,startFrame: 0,endFrame: 99 });
this.load.spritesheet('barenergy', 'assets/bars/texture2.png', { frameWidth: 600, frameHeight: 400,startFrame: 0,endFrame:99});

/* this.load.json('scoreeagle', 'global/eaglescore.json');
this.load.json('scorepromi', 'global/promiscore.json');
this.load.json('day', 'global/day.json'); */
   }

    create ()
    {

console.log("current day is in game ", this.day)
const daytext = document.getElementById("dayscore");  
daytext.innerHTML = "Day </br>"+this.day;
daytext.style.display = "block";


      this.loop();
      this.loop1()
      this.notfirstvisit =true;
        const vid = document.getElementById("intro");
vid.style.display = "none";
       this.matter.world.setBounds(0, 0, 1280, 1024);
       this.matter.world.walls.top.collisionFilter.category = 3;
       this.matter.world.walls.bottom.collisionFilter.category = 3;
       this.matter.world.walls.right.collisionFilter.category = 3;
       this.matter.world.walls.left.collisionFilter.category = 3;


const canCollide = (filterA, filterB) =>
{
    if (filterA.group === filterB.group && filterA.group !== 0)
    { return filterA.group > 0; }

    return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
};

const group1 = 1;
const group2 = 2;
const group3 = 3;
const cat1 = 2;
const cat2 = 3;
console.log(group1,group2,cat1)

   this.wings = this.sound.add('theme');
   this.cry= this.sound.add('cry');
   this.ecry= this.sound.add('ecry');
   this.ahh= this.sound.add('ahh');
   this.pui= this.sound.add('pui');
   this.mukke= this.sound.add('mukke');

   //this.mukke.on('stop');
   console.log(this.mukke.volume)
  
   const Body = Phaser.Physics.Matter.Matter.Body;
        const Bodies = Phaser.Physics.Matter.Matter.Bodies;
        const Composite = Phaser.Physics.Matter.Matter.Composite;
        const Parser = Phaser.Physics.Matter.PhysicsEditorParser;


  this.livericon = this.add.image(1150, 100, 'liveric').setScale(0.1+this.liver/1000);
  this.birdicon = this.add.image(140, 120, 'birdic').setScale(0.1+this.selfesteem/900);


this.insultsbars = this.add.sprite(1025, 825,'barinsults',0).setScale(1);
this.insultsbars.setFrame(0);
this.bladderbars = this.add.sprite(1025, 825,'barbladder',0).setScale(1);
this.bladderbars.setFrame(0);
this.energybars = this.add.sprite(265, 822,'barenergy',0).setScale(0.95);
this.energybars.setFrame(0);
        this.eagle = this.matter.add.sprite(375, 470, 'egal',{ignoreGravity: true,collisionFilter: { group: 1}}).setScale(0.73);
        //setCollisionCategory(cat1).setCollidesWith(cat1);//.setScale(0.3).refreshBody();;
   // const eaglle = this.matter.add.sprite(375, 470, 'egal').setScale(0.73).setIgnoreGravity(true).setCollisionCategory(cat1).setCollidesWith(cat1);//.setScale(0.3).refreshBody();;
console.log("eagle",this.eagle)
    var shapes = this.cache.json.get('maskpromi');
    const composite = Composite.create();
  this.eagle.setFriction(1);
    this.eagle.setFrictionAir(0.2);
    this.eagle.setBounce(0.9);

  this.eagle.setCircle(100).setIgnoreGravity(true).setCollisionGroup(group1).setCollidesWith(cat2);
 
      

      const path = '1280 1024 650 1024 750 700 850 700 900 500 1220 0 1280 0';
      const verts = this.matter.verts.fromPath(path);

     this.promicolli = this.matter.add.fromVertices(980, 700, verts, {ignoreGravity: true,isStatic: true,collisionFilter: { group: 3}}, true, 0.01, 10);
//const promicollii = this.matter.add.fromVertices(1000, 700, verts, { ignoreGravity: true,collisionFilter: {category: 2, mask: 2, group: 0}}, true, 0.01, 10);

//this.matter.add.fromVertices(408, 492, verts, { ignoreGravity: true }, true, 0.01, 10);
 console.log( this.eagle);
console.log('eagle vs pcolli', canCollide( this.eagle.body.collisionFilter,  this.promicolli.collisionFilter));
    this.promi = this.add.sprite(850, 595, 'idle',{shape: shapes} ).setScale(0.65);//.setCollisionGroup(group1);
    //promi.setPosition(900 + promi.centerOfMass.x, 500 + promi.centerOfMass.y);  // position (0,280)
   // promi.create(700, 500, 'pomi');


    this.eagle.setBounce(0.5);


    // eagle.setCollideWorldBounds(true);
  
    // this.physics.add.collider(eagle,  promi,hitPromi, null, this);
   

   // this.scoreText = this.add.text(850, 16, 'liver: '+this.liver, { fontSize: '32px', fill: '#6666ff' });
   // this.bladderText = this.add.text(850, 56, 'bladder: '+this.bladder, { fontSize: '32px', fill: '#6666ff' });
    //this.insultText = this.add.text(850, 96, 'schlagfertigkeit: '+this.schlagfertigkeit, { fontSize: '32px', fill: '#6666ff' });

   // this.selfText = this.add.text(50, 16, 'self-esteem: '+ this.selfesteem, { fontSize: '32px', fill: '#6666ff' });
    //this.energyText = this.add.text(50, 56, 'energy: '+this.energy, { fontSize: '32px', fill: '#6666ff' });
    

  //insultText = this.add.text(600, 56, insults[0], {;
   



     this.graphics = this.add.graphics();

this.path = { t: 0, vec: new Phaser.Math.Vector2() };

this.startPoint = new Phaser.Math.Vector2( this.peex,  this.peey);
const controlPoint1 = new Phaser.Math.Vector2(860, 0);
const controlPoint2 = new Phaser.Math.Vector2(810, 590);
const endPoint = new Phaser.Math.Vector2( 810, 590);

this.curve = new Phaser.Curves.CubicBezier(endPoint, controlPoint2, controlPoint1,  this.startPoint);

//this.stars = this.add.group({ key: 'peee', repeat: 32 });
this.point0 = this.add.circle( this.startPoint.x,  this.startPoint.y, 0,0).setScale(0.1);
this.pee1 = this.matter.add.image( this.startPoint.x,  this.startPoint.y, 'peee', 0,{ ignoreGravity: true ,/*   isStatic: true,      plugin: {
  attractors: [
      (bodyA, bodyB) => ({
          x: (bodyA.position.x - bodyB.position.x) * 0.000001,
          y: (bodyA.position.y - bodyB.position.y) * 0.000001
      })
  ]
} */}).setScale(0.12).setCollisionCategory(cat1).setCollidesWith(cat1,cat2);
this.pee1.setTint(0x740707);
console.log("worls",this.matter.world,this.matter.world.walls.bottom,this.matter.world.walls.left,this.matter.world.walls.right,)
 
this.pee2 = this.matter.add.image(1280,1024, 'peee', 0, { isSensor: false, label: 'left' , mass: 10000,ignorePointer: true}).setScale(0.1).setCollisionGroup(group2).setCollisionCategory(cat1).setCollidesWith(group1,cat1);
this.pee2.setTint(0x000);

this.pee3 = this.matter.add.image(1280,1024, 'peee', 0, {  isSensor: false, label: 'left', mass: 1,ignorePointer: true }).setScale(0.1).setCollisionGroup(group2).setCollisionCategory(cat1).setCollidesWith(group1,cat1);
this.pee3.setTint(0x000);

this.pee4 = this.matter.add.image(1280,1024, 'peee', 0, { isSensor: false, label: 'left' , mass: 1,ignorePointer: true}).setScale(0.1).setCollisionGroup(group2).setCollisionCategory(cat1).setCollidesWith(group1,cat1);
this.pee4.setTint(0x000);

this.pee5= this.matter.add.image(1280,1024, 'peee', 0, { isSensor: false, label: 'left' , mass: 1,ignorePointer: true}).setScale(0.1).setCollisionGroup(group2).setTint(0x000)/* .setFriction(1).setFrictionAir(0.03).setBounce(0.5) */.setCollisionCategory(cat1).setCollidesWith(group1,cat1);
this.pee6= this.matter.add.image(1280,1024, 'peee', 0, { isSensor: false, label: 'left' , mass: 1,ignorePointer: true}).setScale(0.1).setCollisionGroup(group2).setTint(0x000)/* .setFriction(1).setFrictionAir(0.03).setBounce(0.5) */.setCollisionCategory(cat1).setCollidesWith(group1,cat1);
this.pee7= this.matter.add.image(1280,1024, 'peee', 0, { isSensor: false, label: 'left' , mass: 1,ignorePointer: true}).setScale(0.1).setCollisionGroup(group2).setTint(0x000)/* .setFriction(1).setFrictionAir(0.03).setBounce(0.5) */.setCollisionCategory(cat1).setCollidesWith(group1,cat1);
this.pee8= this.matter.add.image(1280,1024, 'peee', 0, { isSensor: false, label: 'left', mass: 1 ,ignorePointer: true}).setScale(0.1).setCollisionGroup(group2).setTint(0x000)/*.setFriction(1).setFrictionAir(0.03).setBounce(0.5)*/.setCollisionCategory(cat1).setCollidesWith(group1,cat1);





  //pee5 = this.matter.add.image(startPoint.x, startPoint.y, 'peee', 0, { isSensor: true, label: 'left' }).setScale(0.1);
 // pee5.setTint(0x000);
 //this.pee2.setFriction(0).setFrictionAir(0.03).setBounce(0.5); 
 //this.pee3.setFriction(0).setFrictionAir(0.03).setBounce(0.5); 
 //this.pee4.setFriction(0).setFrictionAir(0.03).setBounce(0.5); 

 
      console.log(this.pee1,this.pee2,this.pee3,this.pee4);

/*
        const stars = this.add.group({ key: 'star', repeat: 32 });

        const circle = new Phaser.Geom.Circle(400, 300, 64);

        Phaser.Actions.PlaceOnCircle(stars.getChildren(), circle);

        this.tweens.add({
            targets: circle,
            radius: 228,
            ease: 'Quintic.easeInOut',
            duration: 1500,
            yoyo: true,
            repeat: -1,
            onUpdate: function ()
            {
                Phaser.Actions.RotateAroundDistance(stars.getChildren(), { x: 400, y: 300 }, 0.02, circle.radius);
            }
        });*/ 

this.point0.setData('vector',  this.startPoint);


this.point0.setData('isControl', false);



      //  this.curve = new Phaser.Curves.CubicBezier(startPoint, controlPoint1, controlPoint2, endPoint);
     
this.points = this.curve.getSpacedPoints(32);
console.log("points",this.points);




//Phaser.Actions.PlaceOnCircle(this.stars.getChildren(), this.path);
this.tween= this.tweens.add({
    targets: this.path,
    t: 1,
    ease: 'Sine.easeInOut',
    duration: 800,
    yoyo: false,
    repeat: -1,
   /* onUpdate: function ()
            {
                Phaser.Actions.RotateAroundDistance(this.stars.getChildren(), { x: 400, y: 300 }, 0.02, this.path.radius);
            }*/
});

console.log(this.tween);
/* this.tweens.add({
    targets: pee1,
    x: this.path.vec.x,
    ease: 'Sine.easeInOut',
    duration: 800,
    yoyo: false,
    repeat: -1
}); */

if(!this.anims.exists("iddle")){
this.anims.create({
  key: 'iddle',
        frames: this.anims.generateFrameNumbers('idle', { start: 0, end:  11}),
        frameRate: 4,
        repeat: -1
});}
if(!this.anims.exists("peeee")){
this.anims.create({
  key: 'peeee',
        frames: this.anims.generateFrameNumbers('pee', { start: 0, end:  5}),
        frameRate: 10,
        repeat: 0
});}
if(!this.anims.exists("shhout")){
this.anims.create({
  key: 'shhout',
        frames: this.anims.generateFrameNumbers('shout', { start: 0, end:  5}),
        frameRate: 4,
        repeat: 0
});}
if(!this.anims.exists("huurt")){
this.anims.create({
  key: 'huurt',
  frames: this.anims.generateFrameNumbers('hurt', { start: 0, end:  2}),
        frameRate: 4,
        repeat: 0
});}

if(!this.anims.exists("left")){
     this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('egal', { start: 0, end:  5}),
        frameRate: 8,
        repeat: -1
    });}


if(!this.anims.exists("turn")){
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'egal', frame: 0} ],
        frameRate: 8
    });}

    if(!this.anims.exists("right")){
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('egal', { start:0 , end: 5 }),
        frameRate: 15,
        repeat: -1
    });}

    if(!this.anims.exists("bite")){
    this.anims.create({
        key: 'bite',
        frames: this.anims.generateFrameNumbers('bite', { start:0 , end: 7 }),
        frameRate: 15,
        repeat: 0
    });}

    if(!this.anims.exists("claw")){
    this.anims.create({
        key: 'claw',
        frames: this.anims.generateFrameNumbers('kick', { start: 0, end:  8}),
        frameRate: 8,
        repeat: 0
    });}
    //promi.anims.play('iddle', true);
    //  Collide the player and the stars with the platforms
    this.cursors = this.input.keyboard.createCursorKeys();
    this.KKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
    this.LKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
   

    this.VKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);
    this.BKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    this.WKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.SKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
   
  /*  this.LKey.on('down', (key, event) =>
        {
          this.bladder -=1;
          let intbladder = Math.floor(this.bladder);
          this.bladderText.setText('bladder: ' + intbladder);

        }); */
    this.matter.world.on('collisionstart', (event, eagle, promicolli) =>
        {

         
          console.log(event.pairs[0]);
        console.log(event.pairs[0].bodyA.collisionFilter.group,event.pairs[0].bodyB.collisionFilter.group);

        if(event.pairs[0].bodyA.collisionFilter.group === 1 && event.pairs[0].bodyB.collisionFilter.group === 3){
         // console.log(pee1,eagle, promicolli);
if(this.fastatt){
  if(this.liver>0){
    this.liver -= 5;
          if(this.energy>0){
            this.energy -= 5;
            if(this.energy>= 0){
              this.energybars.setFrame(this.energyfr-this.energy);
       }
        }
        }
          else{
            this.pwon= true;
            this.won= "eagle";
            this.scene.stop();
            daytext.style.display = "none";
            this.scene.start('GO', {won: this.won}); 
      
          }
          //this.scoreText.setText('liver: ' + this.liver);
          this.livericon.setScale(0.1+this.liver/1000);
          if(this.energy>= 0){
            this.energybars.setFrame(this.energyfr-this.energy);
     }
     
   // promi.anims.play('huurt', true);
   this.beeingatt = true;
   this.promi.anims.play('huurt', true);
   console.log("promi is beeing attacked");
    if (!this.ahh.isPlaying)
            {
              this.ahh.play();
            }

}else
{//promi.anims.play('iddle', true); 
    this.beeingatt = false;
console.log("missed it");}
if(this.clawatt){
  if(this.liver>0){
    this.liver -= 10;
          if(this.energy>0){
            this.energy -= 10;
            if(this.energy>= 0){
              this.energybars.setFrame(this.energyfr-this.energy);
       }
     
        }
      }
          else{
            this.ewon= true;
            this.won= "eagle";
            this.scene.stop();
            this.mukke.volume = 0;
            daytext.style.display = "none";
            this.scene.start('GO', {won: this.won}); 
          }
     
        
          if(this.energy>= 0){
            this.energybars.setFrame(this.energyfr-this.energy);
     }
     
          this.livericon.setScale(0.1+this.liver/1000);
   // promi.anims.play('huurt', true);
   this.beeingattclaw = true;
    console.log("promi is beeing claw attacked");
    this.promi.anims.play('huurt', true);
    if (!this.ahh.isPlaying)
            {
              this.ahh.play();
            }

}else{//promi.anims.pay('iddle', true);
    this.beeingattclaw = false;
console.log("missed claew it");}

}else{//promi.anims.pay('iddle', true);
    this.beeingattclaw = false;
    this.beeingatt = false;
}

if(event.pairs[0].bodyB.collisionFilter.group === 2 && event.pairs[0].bodyA.collisionFilter.group === 1 ){
  if(this.selfesteem>0){
    this.selfesteem -= 10;
         
  }else{
    this.pwon= true;
    this.won= "promi";
    this.scene.stop();
    this.mukke.volume = 0;
    daytext.style.display = "none";
    this.scene.start('GO', {won: this.won}); 
          }
       this.birdicon.setScale(0.1+this.selfesteem/900);
        //  this.selfText.setText('self-esteem:'+this.selfesteem);
}
       


});

this.promi.anims.play('iddle', true);
//this.gamereset()

/*
this.input.keyboard.on('keycombomatch', event =>
{
  eagle.anims.play('bite', true);

});
*/
/* var scene = 0;
this.input.keyboard.on('keydown', event =>
        {
          console.log("scene: "+scene);
          const menu = document.getElementById("mainmenu");
          const logo = document.getElementById("logo");
          const cntr = document.getElementById("controls");
          const ewin = document.getElementById("eaglewins");
          const pwin = document.getElementById("promiwins");
          const vid = document.getElementById("intro");
     
if ( scene === 0){
logo.style.display = "none";
menu.style.display = "none";
  cntr.style.display = "block";
  scene =1;
  return;
}
if (scene === 1){
cntr.style.display = "none";
vid.style.display = "block";
  vid.style.zIndex = "2";
  vid.play(); 
  scene =2;
  return;
} 
if (scene === 2){

if( vid.playing){ 
  vid.pause(); 
  vid.style.display= "none";

  return;
}  
}
if (scene === 3){
 
  pwin.style.display = "none";
  ewin.style.display = "none";
  cntr.style.display = "block";
 scene =1;
return;




}

console.log("2scene: "+ JSON.stringify(scene));
   


        }); */
    
    }

    update(){
/* 
if(this.won){
  this.mukke.stop();
} */
      if (!this.mukke.isPlaying)
          {
            this.mukke.play();
          }
      if(this.eagle.x<-50){
        this.eagle.x = 100;
      }
   let loopvl = 0;
      if (this.schlagfertigkeit === 0){
   
        const timeoutId=  setTimeout(() => {
         console.log(loopvl) 
     this.shoutcount = 0;
  this.schlagfertigkeit = 5;
  this.insultsbars.setFrame(8-this.schlagfertigkeit);

      
        }, 5000);
      
      }
      if(this.liver < 50){

      this.livericon.setTint(0x740707)
      }
         if(this.selfesteem < 50){
            this.birdicon.setTint(0x740707);
         }


    this.eagle.body.angle = 0;


       // const ewin = document.getElementById("eaglewins");
      //  const pwin = document.getElementById("promiwins");
/* if(this.ewon){
  //ewin.style.display = "block";
  this.scene =3;
  this.gamereset();
  this.scene.start('GO'); 
  //this.ewon= false;
}
if(this.pwon){
  //pwin.style.display = "block";
  this.scene =3;
  this.gamereset();

  //this.pwon= false;
} */

if (this.eagle.anims.getName() !== 'bite')
          {
              //  When the current animation repeat ends, we'll play the 'turn' animation
              this.eagle.anims.playAfterRepeat('left');
          }
          if (this.eagle.anims.getName() !== 'claw')
          {
              //  When the current animation repeat ends, we'll play the 'turn' animation
              this.eagle.anims.playAfterRepeat('left');
          }   

          if (this.promi.anims.getName() !== 'huurt')
          {
              //  When the current animation repeat ends, we'll play the 'turn' animation
              this.promi.anims.playAfterRepeat('iddle');
          }  
          if (this.promi.anims.getName() !== 'shhout')
          {
     
              //  When the current animation repeat ends, we'll play the 'turn' animation
              this.promi.anims.playAfterRepeat('iddle');
          }

// if(peecount == 32)
//{  this.graphics.clear();}



//console.log(this.path.t)


this.peex = this.pee1.x;
this.peey = this.pee1.y;
/* ak */
// point1.data.get('vector').set(peeposx, peeposy);
      
if(this.beeingatt ){
    //this.promi.anims.play('huurt', true);
} 
else if(this.beeingattclaw){
   // this.promi.anims.play('huurt', true);
}
else if(this.shouting){
    this.promi.anims.play('shhout', true);

} 

else if(this.peeing){


this.promi.anims.play('peeee', true);
if (!this.pui.isPlaying)
          {
            this.pui.play();
          }

                   
          this.curve.getPoint(this.path.t, this.path.vec);

          this.pee2.setPosition(this.path.vec.x, this.path.vec.y); 
//this.graphics.fillStyle(0x000, 1);
//this.graphics.fillCircle(this.path.vec.x, this.path.vec.y, 8);

this.curve.getPoint(this.path.t-0.02, this.path.vec);
this.pee3.setPosition(this.path.vec.x, this.path.vec.y); 

//this.graphics.fillStyle(0x000, 1);
//this.graphics.fillCircle(this.path.vec.x, this.path.vec.y, 8);

this.curve.getPoint(this.path.t-0.04, this.path.vec);
this.pee4.setPosition(this.path.vec.x, this.path.vec.y); 
this.curve.getPoint(this.path.t-0.06, this.path.vec);
this.pee5.setPosition(this.path.vec.x, this.path.vec.y); 
this.curve.getPoint(this.path.t-0.08, this.path.vec);
this.pee6.setPosition(this.path.vec.x, this.path.vec.y); 
this.curve.getPoint(this.path.t-0.1, this.path.vec);
this.pee7.setPosition(this.path.vec.x, this.path.vec.y); 
this.curve.getPoint(this.path.t-0.12, this.path.vec);
this.pee8.setPosition(this.path.vec.x, this.path.vec.y); 
//this.graphics.fillStyle(0x000, 1);
//this.graphics.fillCircle(this.path.vec.x, this.path.vec.y, 8);

//this.curve.getPoint(this.path.t-0.12, this.path.vec);
//pee5.setPosition(this.path.vec.x, this.path.vec.y); 
//this.graphics.fillStyle(0x000, 1);
//this.graphics.fillCircle(this.path.vec.x, this.path.vec.y, 8);

if(this.pee1.x == this.pee2.x){
  this.tween.pause();
}

}
else if(!this.peeing){
  this.tween.repeat = '0';
    this.tween.restart();
}else{
    this.promi.anims.play('iddle', true);
}
this.eagle.setVelocity(0);
//eagle.anims.play('turn');

if (this.VKey.isDown)
{
    this.fastatt = true;
    this.eagle.anims.play('bite', true);
if (!this.ecry.isPlaying)
          {
            this.ecry.play();
          }
}
else /*if (this.KKey.isUp)*/{
    this.fastatt = false;
}

if (this.BKey.isDown)
{
    this.clawatt = true;
    this.eagle.anims.play('claw', true);
if (!this.ecry.isPlaying)
          {
            this.ecry.play();
          }
}
else /*if (this.KKey.isUp)*/{
    this.clawatt = false;
}
const box = document.getElementById("textbox");

if(this.shouting){

//shouting = false;
const delayInMilliseconds = 5000; //1 second
setTimeout(() => {
//eagle.setFrictionAir(0.2);
box.style.display="none";
this.promi.anims.play('iddle', true);
}, delayInMilliseconds);
}
let hold = 0;
if(this.KKey.isDown){

if(this.schlagfertigkeit>0){
    this.shouting = true;
//eagle.setFrictionAir(0.9);
}
this.shoutactive();
}
if(this.KKey.isUp){
if(this.schlagfertigkeit>=0){

this.shoutinng();
}
this.shouting = false;
}


this.peeing = false;
if(this.LKey.isDown){
if(this.bladder>0){
  this.bladder -=0.7;
  let intbladder = Math.floor(this.bladder);
  this.bladderbars.setFrame(100-intbladder);
  console.log(this.bladderbars.frame.name)
 // this.bladderText.setText('bladder: ' + intbladder);
// tween.start();
this.peeing = true;} 




}


if (this.cursors.up.isDown)
{
    this.peey = this.pee1.y -5;
    this.peex = this.pee1.x;
    this.pee1.setPosition(this.peex,this.peey);
    this.point0.data.get('vector').set(this.peex, this.peey);
}

if (this.cursors.down.isDown)
{
    this.peey = this.pee1.y +5;
    this.peex = this.pee1.x;
//pee1.setVelocityY(10);
this.pee1.setPosition(this.peex,this.peey);
this.point0.data.get('vector').set(this.peex, this.peey);

}

if (this.cursors.left.isDown)
{
    this.peex = this.pee1.x -5;
    this.peey = this.pee1.y;
    this.pee1.setPosition(this.peex,this.peey);
    this.point0.data.get('vector').set(this.peex, this.peey);
//pee1.setVelocityX(-10);
}

if (this.cursors.right.isDown)
{
    this.peex = this.pee1.x +5;
    this.peey = this.pee1.y;
// pee1.setVelocityX(10);
this.pee1.setPosition(this.peex, this.peey);
this.point0.data.get('vector').set(this.peex, this.peey);

} 

if (this.AKey.isDown)
{
if (!this.wings.isPlaying)
          {
            this.wings.play();
          }
          if(!this.shouting)
          this.eagle.setVelocityX(-10);
          this.eagle.setRotation(0);
  if(this.fastatt){

    this.eagle.anims.play('bite', true);
}
if(this.clawatt){
    this.eagle.anims.play('claw', true);

}
if (!this.fastatt && !this.clawatt)
{this.eagle.anims.play('left', true);}

}
else if (this.DKey.isDown)
{
if (!this.wings.isPlaying)
          {
            this.wings.play();
          }

 if(this.fastatt){

    this.eagle.anims.play('bite', true);
  } 
  if (!this.fastatt && !this.clawatt)
{ this.eagle.anims.play('right', true);}
if(!this.shouting){
    this.eagle.setVelocityX(10);}

} 


if (this.WKey.isDown)
{
    this.eagle.setVelocityY(-10);
    this.eagle.setRotation(0);
  if (!this.wings.isPlaying)
          {
            this.wings.play();
          }
}
else if (this.SKey.isDown)
{
if (!this.wings.isPlaying)
          {
            this.wings.play();
          }
          this.eagle.setVelocityY(10);

}

    }




    hitPromi(eagle, promi){

        this.liver -= 1;
        this.livericon.setScale(0.1+this.liver/1000);
      
      }
    
    shoutactive(){
        const box = document.getElementById('textbox');
        if(this.shouting)
      {     box.style.display="block";
      this.eagle.setVelocityX(-50);}
      
      }
      
     shoutinng(){
      
        
      const box = document.getElementById('textbox');
        if(this.shouting)
      {     box.style.display="block";
      box.innerHTML = this.insults[this.shoutcount];
      this.eagle.setVelocityX(-50);
      
        if(this.schlagfertigkeit == 0)
      {this.schlagfertig = false;
        
      }else{
        this.schlagfertigkeit -= 1;
        if(this.selfesteem>0){
            this.selfesteem -= 30;
               
        }else{
          this.pwon= true;
          this.won= "promi";
          this.scene.stop();
          this.mukke.volume = 0;
          const daytext = document.getElementById("dayscore");
          daytext.style.display = "none";
          this.scene.start('GO', {won: this.won}); 
                }
      
               // this.selfText.setText('self-esteem:'+this.selfesteem);
                      this.birdicon.setScale(0.1+this.selfesteem/900);
       
      }
      console.log("schlagfertigkeit"+this.schlagfertigkeit);
         //const text = document.createTextNode(insults[shoutcount]);
        
      //box.appendChild(text);
      console.log("isultlenght",this.insults.length);
      if(this.shoutcount < this.insults.length-1){
      console.log(this.shoutcount);
      this.shoutcount ++;
      }else{
        this.shoutcount =0;
      }
      this.shouting = false;
      } 
      //this.insultText.setText('schlagfertigkeit: ' + this.schlagfertigkeit);
      this.insultsbars.setFrame(8-this.schlagfertigkeit);
      }
      
    introend(){
      
        const delayInMilliseconds = 1000; //1 second
      setTimeout(() => {
        const vid= document.getElementById('intro');
      vid.style.display= "none";
      }, delayInMilliseconds);
      
      }
      
      gamereset(){
      this.liver = 500;
      this.bladder = 98;
      this.schlagfertigkeit = 9;
      this.selfesteem= 1000;
      this.energy = 99;
      
      //this.energyText.setText('energy: ' + this.energy);
      if(this.energy>= 0)
{      this.energybars.setFrame(this.energyfr-this.energy);}

      this.bladderbars.setFrame(100-this.bladder);
      console.log(this.bladderbars.frame.name)
     // this.bladderText.setText('bladder: ' + this.bladder);
      //this.selfText.setText('self-esteem: ' + this.selfesteem);
            this.birdicon.setScale(0.1+this.selfesteem/900);
      this.livericon.setScale(0.1+this.liver/1000);
      this.insultsbars.setFrame(8-this.schlagfertigkeit);

      this.promi.anims.play('iddle');
      this.eagle.setPosition(375, 470);
      this.eagle.anims.stop();
      }
      loop() {
        setTimeout(() => {
      
          if (this.energy < 60){
            this.energy ++;
            if(this.energy>= 0){
            this.energybars.setFrame(this.energyfr-this.energy);
     }
           // this.energyText.setText('energy: ' + this.energy);
          }
        
        /*   if (liver < 1000){
            liver += 1;
            scoreText.setText('liver: ' + liver);
          } */
      
      
          this.loop();
        }, 2000);
      }

      loop1() {
        setTimeout(() => {
          if (this.bladder < 85){
            this.bladder += 15;
            let intbladder = Math.floor(this.bladder);
            this.bladderbars.setFrame(100-intbladder);
            console.log(this.bladderbars.frame.name)
           // this.bladderText.setText('bladder: ' + intbladder);
          }
         
      
          this.loop1();
        }, 3000);
      }
 
      
}
