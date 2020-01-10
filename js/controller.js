export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.startGame();
    }

    startGame() {
        const productionData = this.model.getProductionData();
        
        this.view.renderProduction();
        

        console.log(this.model);
        console.log(this.model.getProductionData());
        console.log(productionData);

        for (let key in productionData) {
            console.log(key);
            this.view.createProductionElement(productionData[key]);
        }

        this.view.renderProduction();


    }
}

