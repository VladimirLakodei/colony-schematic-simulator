import controller from './controller.js';
import production from './production.js';

// const controller = new Controller();

export default class Game {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    start() {
        production.init();
        controller.startTick();
        console.log('Game is start!');
        controller.stopTick();
    }
}