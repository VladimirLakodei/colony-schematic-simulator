import Model from '../model/production.js';
import View from '../view/production.js';

export default class Controller {
    constructor(root) {
        this.model = new Model();
        this.view = new View(root);
    }

    initProduction() {
        const productionData = this.model.getProductionData();
        this.view.renderProduction(this.model.getProductionData());
    }
}

