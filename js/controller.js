import Production from './production/controller.js';

export default class Controller {
    constructor(root) {
        this.root = root;

        this.production = new Production(this.root);

        this.startGame();
    }

    startGame() {
        this.production.initProduction();
    }
}

