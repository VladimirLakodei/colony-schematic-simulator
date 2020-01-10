import Model from './model.js';
import View from './view.js';
import Controller from './controller.js';

const root = document.querySelector('#game');

const model = new Model();
const view = new View(root);
const controller = new Controller(model, view);