import homePicSrc from './img/link.png'
import Pic1 from './img/Meat-skewer.png'
import Pic2 from './img/Prime-meat-and-seafood-fry.png'
import Pic3 from './img/Prime-poultry-curry.png'

const buildBaseOn = (parent) => {
    const headline = document.createElement('h1');
    const headImg = document.createElement('img');
    headline.textContent = 'Link restaurant';
    headImg.src='/src/img/link.png';
    parent.appendChild(headline);
    parent.appendChild(headImg);
}

const createHomeOn = (parent) => {
    const headline = document.createElement('h1');
    const text = document.createElement('div');
    const homePic = new Image();
    headline.textContent = 'LINK RESTAURANT';
    homePic.src = homePicSrc;
    text.textContent = 'Link Restaurant offers the best food in the area. You can experience all the dishes you can find on Hilaru Continent. Have a good meal!';
    parent.appendChild(headline);
    parent.appendChild(text);
    parent.appendChild(homePic);
}

const createMenuBlock = (dish, imgSrc) => {
    const img = document.createElement('img');
    const dishName = document.createElement('div');
    const block = document.createElement('div');
    block.classList.add('menu-block');
    img.src = `${imgSrc}`;
    dishName.textContent = `${dish}`;
    block.appendChild(img);
    block.appendChild(dishName);
    return block;
}

const createMenuOn = (parent) => {
    const menu = document.createElement('div');
    const block1 = createMenuBlock('Meat Skewer', Pic1);
    const block2 = createMenuBlock('Prime Poultry Curry', Pic3);
    const block3 = createMenuBlock('Prime Meat and Seafood Fry', Pic2);

    menu.textContent = 'MENU';
    parent.appendChild(menu);
    parent.appendChild(block1);
    parent.appendChild(block2);
    parent.appendChild(block3);
}

const createContactBlock = (name, role, tel, email) => {
    const block = document.createElement('div');
    const nameInfo = document.createElement('div');
    const roleInfo = document.createElement('div');
    const telInfo = document.createElement('div');
    const emailInfo = document.createElement('div');
    block.classList.add('contact-block');
    nameInfo.classList.add('name-info');
    roleInfo.classList.add('info');
    telInfo.classList.add('info');
    emailInfo.classList.add('info');
    nameInfo.textContent = `${name}`;
    roleInfo.textContent = `${role}`;
    telInfo.textContent = `${tel}`;
    emailInfo.textContent = `${email}`;
    block.appendChild(nameInfo);
    block.appendChild(roleInfo);
    block.appendChild(telInfo);
    block.appendChild(emailInfo);

    return block;
}

const createContactOn = (parent) => {
    const headline = document.createElement('div');
    const block1 = createContactBlock('Peter', 'Chef', '555-555-5554', 'totallyRealEmail@notFake.com');
    const block2 = createContactBlock('Alice', 'Manager', '555-555-5555', 'perfectlyRealEmail@notFake.com');
    const block3 = createContactBlock('Amy', 'Waiter', '555-555-5556', 'totallyRealEmail@notFake.com');
    headline.textContent = 'Contact';
    parent.appendChild(headline);
    parent.appendChild(block1);
    parent.appendChild(block2);
    parent.appendChild(block3);
}


export {buildBaseOn, createHomeOn, createMenuOn, createContactOn};