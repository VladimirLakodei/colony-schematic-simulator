import controller from './controller.js';
import production from './production.js';

// const controller = new Controller();

export default class Game {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    start() {
        const timeStart = Date.now();
        production.init();
        controller.startTick();
        console.log('Game is start!');
        // controller.stopTick();
        // setTimeout(()=>{
        //     controller.stopTick();
        // }, 4010);
        const timeFinish = Date.now();
        console.log(`Game start time: ${timeFinish - timeStart}ms`);
    }
}