import { menu } from './scenes/mainmenu.js';
import { Day } from './scenes/day.js';
import { intro} from './scenes/introvid.js';
import { GameScene } from './scenes/example.js';
import { GO } from './scenes/gameover.js';


const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 1024,
    transparent: true,
    physics: {
        default: 'matter',
        matter: {
          gravity: {
            x:-0.5,
        y:1},
          debug: false,
           plugins: {
            attractors: true
        }
        },
       
    },
        
    scene: [menu,Day,intro,GameScene,GO]
};

const game = new Phaser.Game(config);


