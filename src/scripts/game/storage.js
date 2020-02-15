// import config from '../../assets/data/config.js';
// import production from './production.js';

class Storage {
    constructor() {
        
    }

    get production() {
        return JSON.parse(localStorage.getItem('production'));
    }

    get resources() {
        return JSON.parse(localStorage.getItem('resources'));
    }

    set production(data) {
        // this._production = data;


        localStorage.setItem('production', JSON.stringify(data));
    }

    set resources(data) {
        // this._resources = data;
        localStorage.setItem('resources', JSON.stringify(data));
    }




}

export default new Storage();