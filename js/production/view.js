export default class ViewProduction {
    constructor (root) {
        this.root = root;
    }

    renderProduction(data) {
        const productionWrapper = document.createElement('ul');

        let productionElements = '';

        productionWrapper.classList.add('production');

        for (let key in data) {
            productionElements += this.createProductionElement(data[key]);
        }

        productionWrapper.innerHTML = productionElements;

        this.root.appendChild(productionWrapper);
    }

    createProductionElement(data) {
        const productionElement = `
        <li class="production__element">
            <button class="production__control">-</button>
            <div class="production__inner">
                <img class="production__image" src="img/production/${data.image}">
                <div class="production__inner">
                    <div class="production__cost">${this.createProductionCost(data)}</div>
                    <div class="production__availability"></div>
                    <div class="production__consumption"></div>
                    <div class="production__product"></div>
                </div>
            </div>
            <button class="production__control">+</button>
        </li>
        `;

        return productionElement;
    }

    createProductionCost(data) {
        
    }
}