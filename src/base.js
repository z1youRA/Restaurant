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
    headline.textContent = 'LINK RESTAURANT';
    text.content = 'Link Restaurant offers the best food in the area. You can experience all the dishes you can find on Hilaru Continent. Have a good meal!';
    parent.appendChild(headline);
    parent.appendChild(text);
}

const createMenuBlock = (dish, imgSrc) => {
    const block = document.createElement('div');
    const img = document.createElement('img');
    const dishName = document.createElement('div');
    block.classList.add('block');
    img.src = `${imgSrc}`;
    dishName.textContent = `${dish}`;
    block.appendChild(img);
    block.appendChild(dishName);
    return block;
}

const createMenuOn = (parent) => {
    const menu = createElement('div');
    const block1 = createMenuBlock('Meat Skewer', '/src/img/Meat-skewer.png');
    const block2 = createMenuBlock('Prime Poultry Curry', 'src/img/Prime-poultry-curry.png');
    const block3 = createMenuBlock('Prime Meat and Seafood Fry', 'src/img/Prime-meat-and-seafood-fry.png');

    menu
}

const createContact = (parent) => {
    const 
}


export {buildBaseOn};