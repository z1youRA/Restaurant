import {buildBaseOn, createHomeOn, createMenuOn, createContactOn} from './base.js';
import './styles.css';

const pageLoad = (() => {
    const content = document.getElementById('content');
    const homeTab = document.getElementById('home-tab');
    const menuTab = document.getElementById('menu-tab');
    const contactTab = document.getElementById('contact-tab');
    createHomeOn(homeTab);
    createMenuOn(menuTab);
    createContactOn(contactTab);

})();
