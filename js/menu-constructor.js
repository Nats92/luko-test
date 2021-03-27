const pageMenuContainer = document.querySelector('.page-menu__menu-wrap');

const renderSectionMenu = (menuObject) => {
    menuObject.forEach((element) => {
        const section = document.createElement('section');
        section.classList.add('menu-item');
        section.id = element.id;
        section.innerHTML = `<h2 class="menu-item__title  section-title">${element.groupName}</h2>`;
        renderDishes(section, element);
        pageMenuContainer.appendChild(section);
    });
};

const renderDishes = (section, data) => {
    data.dishes.forEach((element) => {
        if (element.subTitle) {
            const subTitle = document.createElement('h3').classList.add('menu-item__subtitle');
            subTitle.textContent = element.subTitle;
            section.appendChild(section);
        }

        const menuItem = document.createElement('div').classList.add('menu-item__menu-line');

        if (element.description) {
            menuItem.innerHTML = `<div class="menu-item__dish-name-descr-wrap">
          <h4 class="menu-item__dish-name">${element.name}&nbsp<span class="menu-item__dish-weight" aria-label="выход блюда в граммах">${element.width}</span></h4>
          <span class="menu-item__dish-name-descr">${element.description}</span></div>
        <span class="menu-item__dish-price" aria-label="цена в рублях">${element.price}</span>`;
            section.appendChild(menuItem);
        }

        menuItem.innerHTML = `<div class="menu-item__dish-name-descr-wrap">
          <h4 class="menu-item__dish-name">${element.name}&nbsp<span class="menu-item__dish-weight" aria-label="выход блюда в граммах">${element.width}</span></h4>
        <span class="menu-item__dish-price" aria-label="цена в рублях">${element.price}</span>`;
        section.appendChild(menuItem);
    });
};