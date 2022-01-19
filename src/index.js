import {buildBaseOn, createHomeOn, createMenuOn, createContactOn} from './base.js';
import './styles.css';

const pageLoad = (() => {
    const content = document.getElementById('content');
    const homeTab = document.getElementById('home-tab');
    const menuTab = document.getElementById('menu-tab');
    const contactTab = document.getElementById('contact-tab');
    const container = document.createElement('div');
    content.appendChild(container);

    container.classList.add('container');
    homeTab.classList.add('tab');
    menuTab.classList.add('tab');
    contactTab.classList.add('tab');

    const clearContent = (parent) => {
        parent.textContent = '';
        return true;
    }

    homeTab.addEventListener('click', () => {
        clearContent(container);
        createHomeOn(container);
    })

    menuTab.addEventListener('click', () => {
        clearContent(container);
        createMenuOn(container);
    })

    contactTab.addEventListener('click', () => {
        clearContent(container);
        createContactOn(container);
    })

    createHomeOn(container);
})();
