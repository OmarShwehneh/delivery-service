let menuItems = [

    {
        'name': 'HIT! Sesam Chicken',
        'description': 'frittierte Hühnerbrust mit Sesamkörnern, Salat, Reis und Teriyaki-Sauce',
        'price': 12.90,
        'allergenic': ['Enthält glutenhaltige/s Getreide/-Erzeugnisse', 'Enthält Ei/-Erzeugnisse', 'Enthält Sojabohnen/-Erzeugnisse', 'Enthält Sesamsamen/-Erzeugnisse', 'Enthält Schwefeldioxid/Sulfite']
    },

    {
        'name': 'HIT! Lachs Teriyaki',
        'description': 'leicht frittiertes Lachsfilets mit Teriyaki-Sauce, Gemüse, Sojasprossen und Reis',
        'price': 13.50,
        'allergenic': ['Enthält glutenhaltige/s Getreide/-Erzeugnisse', 'Enthält Fisch/-Erzeugnisse', 'Enthält Sojabohnen/-Erzeugnisse', 'Enthält Milch/-Erzeugnisse (laktosehaltig)', 'Enthält Schwefeldioxid/Sulfite']
    },

    {
        'name': 'HIT! Harumaki (6 Stück, vegan)',
        'description': 'japanische Frühlingsrollen gefüllt mit Gemüse und Kyosasauce',
        'price': 4.70,
        'allergenic': ['Enthält glutenhaltige/s Getreide/-Erzeugnisse', 'Enthält Sojabohnen/-Erzeugnisse', 'Enthält Sesamsamen/-Erzeugnisse', 'Enthält Schwefeldioxid/Sulfite']
    },

    {
        'name': 'HIT! Kimchi (scharf)',
        'description': 'scharfer fermentierter Chinakohl mit Ingwer und reichtlich Knoblauchin scharfem Paprikapulver. Mit probiotischen Kulturen.',
        'price': 4.20,
        'allergenic': ['Enthält glutenhaltige/s Getreide/-Erzeugnisse', 'Enthält Fisch/-Erzeugnisse', 'Enthält Sesamsamen/-Erzeugnisse', 'Enthält Schwefeldioxid/Sulfite']
    },

    {
        'name': 'Sweet Sour Soup, 340ml (pikant)',
        'description': 'mit Hühnerbrust, Morcheln, roter Paprika und Eistreifen',
        'price': 4.10,
        'allergenic': ['Enthält Sojabohnen/-Erzeugnisse']
    },

    {
        'name': 'Shrimp Dim Sum (4 Stück)',
        'description': 'Teigtaschen gefüllt mit Garnelen, Wasserkastanien, Bärlauch, Bambussprossen und Karotten dazu Süß-Saurer-Chilisauce',
        'price': 5.50,
        'allergenic': ['Enthält glutenhaltige/s Getreide/-Erzeugnisse', 'Enthält Krebstiere/-Erzeugnisse', 'Enthält Ei/-Erzeugnisse', 'Enthält Sojabohnen/-Erzeugnisse', 'Enthält Milch/-Erzeugnisse (laktosehaltig)', 'Enthält Senf/-Erzeugnisse', 'Enthält Sesamsamen/-Erzeugnisse', 'Enthält Schwefeldioxid/Sulfite']
    }
];
let menuCategories = [
    'Beliebte Gerichte',
    'Suppen',
    'Salate',
    'Vorspeisen',
    'Sushi und Maki Set\'s',
    'Sushi-Sashimi Set\'s',
    'Sushi einzeln',
    'Kleine Maki Rollen',
    'Große Maki Rollen',
    'Bento Boxen',
    'Desserts',
    'Alkoholfreie Getränke',
    'Alkoholische Getränke'
]
let menuItemsInBasket = [];
let menuItemIsOpen = [];
let itemCounter = [];
let itemSubtotal = [];
let itemsInBasket = [];
let deliveryCosts = 0;
let minimumOrderValue = 15;
let languageAndCountrySelectionIsOpen = false;
let loginSectionIsOpen = false;
let liked = false;
let basketSubTotal;
let basketTotal = 0;

// ####################################### RENDERING #######################################

function render() {
    renderMenuCategories();
    renderMenuItems();
    generateEmptyBasketHTML();
    updateMobileBasketBtn();
}

function renderMenuCategories() {
    let container = document.getElementById('menu-categories');
    container.innerHTML = '';

    for (i = 0; i < menuCategories.length; i++) {
        container.innerHTML += `
            <span id="menu-category-${i}" class="menu-category" onclick="selectMenuCategory(${i})">${menuCategories[i]}</span>
        `;
    }
}

function renderMenuItems() {
    let menuItemsContainer = document.getElementById('menu-items-container');
    menuItemsContainer.innerHTML = '';

    for (let i = 0; i < menuItems.length; i++) {
        menuItemsContainer.innerHTML += generateMenuItemsHTML(i);
    }

    // Select the first category as default = favorite meals
    document.getElementById('menu-category-0').classList.add('selected-menu-category');
}

function renderBasketItems() {
    calcBasketSubTotal();
    calcBasketTotal();
    updateMobileBasketBtn();

    // Get the container where the basket items are rendered
    let container = document.getElementById('basket-container');
    container.innerHTML = '';

    // Iterate through array and add all basket items
    for (let i = 0; i < menuItemsInBasket.length; i++) {
        container.innerHTML += generateBasketItemsHTML(i);
        renderAnnotationBtn(i);

        // Check if a Annotation is stored in existing items of basket and don't hide them
        if (menuItemsInBasket[i].annotation != '') {
            showAnnotationOutput(i);
            document.getElementById(`basket-item-body-${i}`).style = 'padding-bottom: 0;';
        }
    }

    // Show basket summary only if there are items in basket
    if (menuItemsInBasket.length > 0) {
        container.innerHTML += generateBasketSummaryHTML();

        // Minimum order value not reached
        if (basketSubTotal < minimumOrderValue) {
            container.innerHTML += generateMinOrderValueNotReacheHTML();
        }

        // Generate disabled checkout btn
        container.innerHTML += `
            <div class="checkout-btn-container">
                <button id="checkout-btn" class="checkout-btn-disabled btns">Bezahlen (${convertPrice(basketTotal) + ' €'})</button>
            </div>
        `;

        // Minimum order value reached = enable btn
        if (basketSubTotal >= minimumOrderValue) {
            enableCheckoutBtn();
        }

    } else {
        generateEmptyBasketHTML();
    }

}

function renderAnnotationBtn(item) {
    if (menuItemsInBasket[item].annotation === '') {
        generateAddAnnotation(item);
    } else {
        generateEditAddAnnotation(item);
    }
}

// ####################################### MAIN FUNCTIONS #######################################

function selectMenuCategory(item) {
    document.getElementById(`menu-category-${item}`).classList.add('selected-menu-category');

    // De-select all other categories
    for (let i = 0; i < menuCategories.length; i++) {
        if (i !== item) {
            document.getElementById(`menu-category-${i}`).classList.remove('selected-menu-category');
        }
    }
}

function openMenuItem(item) {
    menuItemIsOpen[item] = !menuItemIsOpen[item];

    if (menuItemIsOpen[item] === true) {
        document.getElementById(`menu-item-basket-section-${item}`).classList.remove('d-none');
        document.getElementById(`menu-item-icon-${item}`).src = './img/icons/close.svg';

        // Close all other menu items when selected menu item is open
        for (let i = 0; i < menuItems.length; i++) {
            if (i !== item) {
                closeMenuItem(i);
            }
        }

    } else {
        closeMenuItem(item);
    }

    disableMinusBtn(item);
    calcItemSubtotal(item);
}

function closeMenuItem(item) {
    document.getElementById(`menu-item-basket-section-${item}`).classList.add('d-none');
    document.getElementById(`menu-item-icon-${item}`).src = './img/icons/plus.svg';

    itemCounter[item] = 1;
    document.getElementById(`menu-item-amount-${item}`).innerHTML = itemCounter[item];
}

function itemCounterPlus(item) {
    itemCounter[item]++;
    document.getElementById(`menu-item-amount-${item}`).innerHTML = itemCounter[item];

    if (itemCounter[item] !== 1) {
        enableMinusBtn(item);
    }

    calcItemSubtotal(item);
}

function itemCounterMinus(item) {
    if (itemCounter[item] > 1) {
        itemCounter[item]--;
        document.getElementById(`menu-item-amount-${item}`).innerHTML = itemCounter[item];
    }

    if (itemCounter[item] === 1) {
        disableMinusBtn(item);
    }

    calcItemSubtotal(item);
}

function calcItemSubtotal(item) {
    let amount = itemCounter[item];
    let price = menuItems[item].price;
    let subTotal = amount * price;

    itemSubtotal[item] = subTotal;
    document.getElementById(`add-to-basket-btn-${item}`).innerHTML = convertPrice(subTotal) + ' €';
}

function addToBasket(item) {
    let itemName = menuItems[item].name;
    let itemPrice = menuItems[item].price;
    let itemAmount = itemCounter[item];
    let itemTotal = itemPrice * itemAmount;

    let itemAlreadyExistsInBasket = false;
    let indexOfExistingItemInBasket;

    // Check if menu item is already in basket
    for (let i = 0; i < menuItemsInBasket.length; i++) {
        let name = menuItemsInBasket[i].name;

        if (name === itemName) {
            itemAlreadyExistsInBasket = true;
            indexOfExistingItemInBasket = i;
            break;
        }
    }

    if (itemAlreadyExistsInBasket) {
        // console.log('Item already exists in basket');

        menuItemsInBasket[indexOfExistingItemInBasket].amount += itemAmount;
        menuItemsInBasket[indexOfExistingItemInBasket].total += itemTotal;

    } else {
        // console.log('Item doesn\'t exist in basket');

        menuItemsInBasket.push({
            'name': itemName,
            'price': itemPrice,
            'amount': itemAmount,
            'total': itemTotal,
            'annotation': ''
        });
    }

    renderBasketItems();
    closeMenuItem(item);
    updateMobileBasketBtn();
}

function updateMobileBasketBtn() {
    let container = document.getElementById('mobile-basket-btn');
    container.innerHTML = `Warenkorb (${convertPrice(basketTotal)} €)`
}

function calcBasketItemSubtotal(item) {
    return menuItemsInBasket[item].amount * menuItemsInBasket[item].price;
}

function calcBasketSubTotal() {
    let sum = 0;

    for (let i = 0; i < menuItemsInBasket.length; i++) {
        sum += menuItemsInBasket[i].total;
    }

    basketSubTotal = sum;
}

function calcBasketTotal() {
    basketTotal = basketSubTotal + deliveryCosts;
}

function decreaseItemInBasket(item) {

    if (menuItemsInBasket[item].amount >= 1) {
        menuItemsInBasket[item].amount--;
        menuItemsInBasket[item].total = calcBasketItemSubtotal(item);

        // Update menu item in basket
        document.getElementById(`item-amount-in-basket-${item}`).innerHTML = menuItemsInBasket[item].amount;
        document.getElementById(`item-total-in-basket-${item}`).innerHTML = convertPrice(menuItemsInBasket[item].total) + ' €';
        calcBasketSubTotal()
    }

    if (menuItemsInBasket[item].amount === 0) {
        deleteMenuitemInBasket(item);
    }

    renderBasketItems();
    updateMobileBasketBtn();
}

function increaseItemInBasket(item) {

    menuItemsInBasket[item].amount++;
    menuItemsInBasket[item].total = calcBasketItemSubtotal(item);

    // Update menu item in basket
    document.getElementById(`item-amount-in-basket-${item}`).innerHTML = menuItemsInBasket[item].amount;
    document.getElementById(`item-total-in-basket-${item}`).innerHTML = convertPrice(menuItemsInBasket[item].total) + ' €';

    calcBasketSubTotal();
    renderBasketItems();
    updateMobileBasketBtn();
}

function deleteMenuitemInBasket(item) {
    menuItemsInBasket.splice(item, 1);
    renderBasketItems();
}

function convertPrice(number) {
    return number.toFixed(2).replace('.', ',');
}

function checkout() {
    menuItemsInBasket = [];
    showOrderSuccesful();
    renderBasketItems();
    closeMobileBasket();
}

function showMobileBasket() {
    document.getElementById('basket-section').classList.remove('hide-mobile');
    document.getElementById('basket-section').classList.add('mobile-basket');
    document.getElementById('mobile-basket-header').classList.remove('d-none');
    document.getElementById('basket-header').classList.add('d-none');
    document.body.style = 'overflow: hidden;'
}

function closeMobileBasket() {
    document.getElementById('basket-section').classList.add('hide-mobile');
    document.getElementById('basket-section').classList.remove('mobile-basket');
    document.getElementById('mobile-basket-header').classList.add('d-none');
    document.getElementById('basket-header').classList.remove('d-none');
    document.body.style = 'overflow: auto;'
}

// Track user scrolling
document.addEventListener('scroll', function() {
    let scrolledFromTop = window.pageYOffset;
    let headerHeight = document.getElementById('header').offsetHeight;
    let restaurantBannerHeight = document.getElementById('restaurant-banner').offsetHeight;

    // console.log('pageyOffset: ' + scrolledFromTop);

    // Check to enable sticky-up-btn
    if (scrolledFromTop >= (headerHeight + restaurantBannerHeight)) {
        enableUpBtn();
        // console.log('btn enabled = true');
    } else {
        disableUpBtn();
        // console.log('btn enabled = false');
    }

});