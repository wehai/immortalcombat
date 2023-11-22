
export class menu extends Phaser.Scene
{
    constructor() {
        super('menu')
this.controllspic;
    }
    preload(){

        this.load.image('mmenu', 'assets/mainmenu1.png');
  this.load.image('cntr', 'assets/controls.png');
  this.load.spritesheet('shout', 'assets/shout.png', { frameWidth: 1024, frameHeight: 1024});
  this.load.spritesheet('bite', 'assets/birdfly_orange-0.png', { frameWidth: 500, frameHeight: 500});
    }
create(){
    console.log("mainmenu")
    this.matter.add.image(1280/2,1024/2, 'mmenu', 0, {  isStatic: true, ignoreGravity: true });
    this.promi = this.add.sprite(980, 710, 'shout',).setScale(0.45);//.setCollisionGroup(group1);
    this.eagle = this.add.sprite(340, 300, 'egal').setScale(0.63);


this.input.keyboard.on('keydown', event =>{
    this.scene.start('Day')

})
if(!this.anims.exists("bite")){
  this.anims.create({
      key: 'bite',
      frames: this.anims.generateFrameNumbers('bite', { start:0 , end: 5 }),
      frameRate: 15,
      repeat: -1
  });}
  if(!this.anims.exists("shhout")){
    this.anims.create({
      key: 'shhout',
            frames: this.anims.generateFrameNumbers('shout', { start: 0, end:  5}),
            frameRate: 4,
            repeat: -1
    });}

    this.promi.anims.play('shhout', true);
    this.eagle.anims.play('bite', true);
}


}