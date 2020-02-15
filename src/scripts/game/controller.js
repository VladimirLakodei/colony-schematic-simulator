import config from '../../assets/data/config.js';
import production from './production.js';

class Controller {
    constructor() {
        this.tickId = null;
    }

    startTick() {
        this.tickId = setInterval(() => {
            console.log('tick');
            production.do();
        }, config.tick);
    }

    stopTick() {
        if (this.tickId) {
            clearInterval(this.tickId);
            this.tickId = null;
        }
    }
}

export default new Controller();