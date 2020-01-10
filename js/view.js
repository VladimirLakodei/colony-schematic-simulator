export default class View {
    constructor (root) {
        this.root = root;
        this.productionElements = '';
    }

    renderProduction() {
        const productionWrapper = document.createElement('ul');

        productionWrapper.classList.add('production');
        
        productionWrapper.innerHTML = this.productionElements;

        this.root.appendChild(productionWrapper);
    }

    createProductionElement(data) {
        const productionElement = `
        <li class="production__element">
            <button class="production__control">-</button>
            <div class="production__inner">
                <img class="production__image" src="img/production/${data.image}">
                <div class="production__inner">
                    <div class="production__cost">
                        <span></span>
                    </div>
                    <div class="production__availability"></div>
                    <div class="production__consumption"></div>
                    <div class="production__product"></div>
                </div>
            </div>
            <button class="production__control">+</button>
        </li>
        `;

        this.productionElements += productionElement;
    }

    createProductionCost(data) {
        
    }
}