import storage from './storage.js';
import startData from '../../assets/data/start.js';
import productionData from '../../assets/data/production.js';
import resourcesData from '../../assets/data/resources.js';

class Production {
    constructor() {
        this._items = {};
        this._resources = {};
    }

    init() {
        this.initItems();
        this.initResources();

        console.log('Production is init!');
    }

    // code duplication initResources()
    initItems() {
        for (let key in productionData) {
            this._items[key] = 0;
        }

        const storageProduction = storage.production;

        if (storageProduction) {
            for (let key in storageProduction) {
                this._items[key] = storageProduction[key];
            }
        } else {
            const startDataProduction = startData.production;

            for (let key in startDataProduction) {
                this._items[key] = startDataProduction[key];
            }

            storage.production = this._items;
        }

        console.log(this._items);
    }

    // code duplication initItems()
    initResources() {
        for (let key in resourcesData) {
            this._resources[key] = 0;
        }

        const storageResources = storage.resources;

        if (storageResources) {
            for (let key in storageResources) {
                this._resources[key] = storageResources[key];
            }
        } else {
            const startDataResources = startData.resources;

            for (let key in startDataResources) {
                this._resources[key] = startDataResources[key];
            }

            storage.resources = this._resources;
        }

        console.log(this._resources);
    }

    do() {
        for (let key in this._items) {
            const item = this._items[key];

            if (item > 0) {
                const product = productionData[key].product;

                console.log('product', product);

                for (let key in product) {
                    this._resources[key] += (product[key]*item);
                }
            }
        }

        console.log(this._items);
        console.log(this._resources);

        storage.production = this._items;
        storage.resources = this._resources;
    }

    add(id) {
        const cost = productionData[id].cost;

        for (let key in cost) {
            console.log('this._resources[key]', this._resources[key]);
            console.log('cost[key]', cost[key]);

            if (this._resources[key] < cost[key]) {
                console.log('this._resources[key] < cost[key]');
                return
            }

        }

        for (let key in cost) {
            this._resources[key] -= cost[key];
        }

        this._items[id]++;

        console.log(this._items);
        console.log(this._resources);

        storage.production = this._items;
        storage.resources = this._resources;
    }

    remove(item) {
        if (this._items[item] > 0) {
            this._items[item]--;
            storage.production = this._items;
            storage.resources = this._resources;
        }
    }

    get items() {
        return this._items;
    }

    get resources() {
        return this._resources;
    }
}

export default new Production();