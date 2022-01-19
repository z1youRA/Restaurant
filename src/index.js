import {buildBaseOn, createHomeOn, createMenuOn, createContactOn} from './base.js';

const content = document.getElementById('content');
createHomeOn(content);
createMenuOn(content);
createContactOn(content);