import storage from './storage.js';
import startData from '../../assets/data/start.js';
import productionData from '../../assets/data/production.js';
import resourcesData from '../../assets/data/resources.js';

class Production {
    constructor() {
        this._items = {};
        this._resources = {};
        this._information = {...productionData};
    }

    init() {
        this.initResources();
        this.initItems();
    }

    // code duplication initResources()
    initItems() {
        for (let key in productionData) {
            this._items[key] = 0;
            this._information[key].item = 0;

            const resources = {};

            for (let resource in this._information[key].product) {
                resources[resource] = this._resources[resource];
            }

            this._information[key].resources = resources;
        }

        const storageProduction = storage.production;

        if (storageProduction) {
            for (let key in storageProduction) {
                this._items[key] = storageProduction[key];
                this._information[key].item = storageProduction[key];
            }
        } else {
            const startDataProduction = startData.production;

            for (let key in startDataProduction) {
                this._items[key] = startDataProduction[key];
                this._information[key].item = startDataProduction[key];
            }

            storage.production = this._items;
        }
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
    }

    do() {
        const timeStart = Date.now();

        for (let key in this._items) {
            const item = this._items[key];
            const consumption = productionData[key].consumption;

            if (item > 0) {
                const product = productionData[key].product;
                const resources = {};

                for (let key in consumption) {
                    if (this._resources[key] < consumption[key]*item) {
                        return
                    }
                }

                for (let key in consumption) {
                    this._resources[key] -= consumption[key]*item;
                }

                for (let key in product) {
                    this._resources[key] += (product[key]*item);
                    resources[key] = this._resources[key];
                }

                this._information[key].resources = resources;
            }
        }

        this.updateProductionResource();

        console.log(this._items);
        console.log(this._resources);
        console.log(this._information);

        storage.production = this._items;
        storage.resources = this._resources;

        const timeFinish = Date.now();
        console.log(`Production do time: ${timeFinish - timeStart}ms`);
    }

    updateProductionResource() {
        for (let key in this._information) {
            for (let resource in this._information[key].resources) {
                this._information[key].resources[resource] = this._resources[resource];
            }
        }
    }

    add(item) {
        const cost = productionData[item].cost;

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

        this._items[item]++;
        this._information[item].item = this._items[item];

        storage.production = this._items;
        storage.resources = this._resources;
    }

    remove(item) {
        if (this._items[item] > 0) {
            this._items[item]--;
            this._information[item].item = this._items[item];
            storage.production = this._items;
            storage.resources = this._resources;
        }
    }

    get information() {
        return this._information;
    }

    // get items() {
    //     return this._items;
    // }

    // get resources() {
    //     return this._resources;
    // }
}

export default new Production();
