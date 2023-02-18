let menuItems = [

    {
        'name': 'HIT! Döner',
        'description': 'frittierte Hühnerbrust mit Sesamkörnern, Salat, Reis und Teriyaki-Sauce',
        'price': 5.00,
        'allergenic': ['Enthält glutenhaltige/s Getreide/-Erzeugnisse', 'Enthält Ei/-Erzeugnisse', 'Enthält Sojabohnen/-Erzeugnisse', 'Enthält Sesamsamen/-Erzeugnisse', 'Enthält Schwefeldioxid/Sulfite']
    },

    {
        'name': 'HIT! Yufka Döner',
        'description': 'leicht frittiertes Lachsfilets mit Teriyaki-Sauce, Gemüse, Sojasprossen und Reis',
        'price': 6.50,
        'allergenic': ['Enthält glutenhaltige/s Getreide/-Erzeugnisse', 'Enthält Fisch/-Erzeugnisse', 'Enthält Sojabohnen/-Erzeugnisse', 'Enthält Milch/-Erzeugnisse (laktosehaltig)', 'Enthält Schwefeldioxid/Sulfite']
    },

    {
        'name': 'HIT! Flalafel (6 Stück, vegan)',
        'description': 'japanische Frühlingsrollen gefüllt mit Gemüse und Kyosasauce',
        'price': 6.50,
        'allergenic': ['Enthält glutenhaltige/s Getreide/-Erzeugnisse', 'Enthält Sojabohnen/-Erzeugnisse', 'Enthält Sesamsamen/-Erzeugnisse', 'Enthält Schwefeldioxid/Sulfite']
    },

    {
        'name': 'HIT! Pizza Kebap ',
        'description': 'scharfer fermentierter Chinakohl mit Ingwer und reichtlich Knoblauchin scharfem Paprikapulver. Mit probiotischen Kulturen.',
        'price': 7.00,
        'allergenic': ['Enthält glutenhaltige/s Getreide/-Erzeugnisse', 'Enthält Fisch/-Erzeugnisse', 'Enthält Sesamsamen/-Erzeugnisse', 'Enthält Schwefeldioxid/Sulfite']
    },

    {
        'name': 'HIT! Pide Kusbasi',
        'description': 'mit Hühnerbrust, Morcheln, roter Paprika und Eistreifen',
        'price': 5.00,
        'allergenic': ['Enthält Sojabohnen/-Erzeugnisse']
    },

    {
        'name': 'HIT! Gemischter Salat',
        'description': 'mit Hühnerbrust, Morcheln, roter Paprika und Eistreifen',
        'price': 5.00,
        'allergenic': ['Enthält Sojabohnen/-Erzeugnisse']
    },
    
    {
        'name': 'HIT! Lahmacun',
        'description': 'Teigtaschen gefüllt mit Garnelen, Wasserkastanien, Bärlauch, Bambussprossen und Karotten dazu Süß-Saurer-Chilisauce',
        'price': 4.50,
        'allergenic': ['Enthält glutenhaltige/s Getreide/-Erzeugnisse', 'Enthält Krebstiere/-Erzeugnisse', 'Enthält Ei/-Erzeugnisse', 'Enthält Sojabohnen/-Erzeugnisse', 'Enthält Milch/-Erzeugnisse (laktosehaltig)', 'Enthält Senf/-Erzeugnisse', 'Enthält Sesamsamen/-Erzeugnisse', 'Enthält Schwefeldioxid/Sulfite']
    }
];
let OptionItems = [

    {
        'name': 'HIT! Döner',
        'description': 'frittierte Hühnerbrust mit Sesamkörnern, Salat, Reis und Teriyaki-Sauce',
        'price': 5.00,
        'allergenic': ['Enthält glutenhaltige/s Getreide/-Erzeugnisse', 'Enthält Ei/-Erzeugnisse', 'Enthält Sojabohnen/-Erzeugnisse', 'Enthält Sesamsamen/-Erzeugnisse', 'Enthält Schwefeldioxid/Sulfite']
    },

    {
        'name': 'HIT! Yufka Döner',
        'description': 'leicht frittiertes Lachsfilets mit Teriyaki-Sauce, Gemüse, Sojasprossen und Reis',
        'price': 6.50,
        'allergenic': ['Enthält glutenhaltige/s Getreide/-Erzeugnisse', 'Enthält Fisch/-Erzeugnisse', 'Enthält Sojabohnen/-Erzeugnisse', 'Enthält Milch/-Erzeugnisse (laktosehaltig)', 'Enthält Schwefeldioxid/Sulfite']
    },

    {
        'name': 'HIT! Flalafel (6 Stück, vegan)',
        'description': 'japanische Frühlingsrollen gefüllt mit Gemüse und Kyosasauce',
        'price': 6.50,
        'allergenic': ['Enthält glutenhaltige/s Getreide/-Erzeugnisse', 'Enthält Sojabohnen/-Erzeugnisse', 'Enthält Sesamsamen/-Erzeugnisse', 'Enthält Schwefeldioxid/Sulfite']
    },
    
    {
        'name': 'HIT! Lahmacun',
        'description': 'Teigtaschen gefüllt mit Garnelen, Wasserkastanien, Bärlauch, Bambussprossen und Karotten dazu Süß-Saurer-Chilisauce',
        'price': 4.50,
        'allergenic': ['Enthält glutenhaltige/s Getreide/-Erzeugnisse', 'Enthält Krebstiere/-Erzeugnisse', 'Enthält Ei/-Erzeugnisse', 'Enthält Sojabohnen/-Erzeugnisse', 'Enthält Milch/-Erzeugnisse (laktosehaltig)', 'Enthält Senf/-Erzeugnisse', 'Enthält Sesamsamen/-Erzeugnisse', 'Enthält Schwefeldioxid/Sulfite']
    }
];
let menuCategories = [
    'Beliebte Gerichte',
    'Drehspieß - Fleischgerichte',
    'Vegetarische Gerichte',
    'Salate',
    'Pide | Calzone | Lahmacun',
    'Pizza',
    'Alkoholfreie Getränke',
]
let menuItemsInBasket = [];
let menuItemIsOpen = [];
let itemCounter = [];
let itemSubtotal = [];
let itemsInBasket = [];
let deliveryCosts = 0;
let minimumOrderValue = 25;
let languageAndCountrySelectionIsOpen = false;
let loginSectionIsOpen = false;
let liked = false;
let basketSubTotal;
let basketTotal = 0;

// ####################################### RENDERING #######################################

/**
 * Initial function - executed when the page is loaded and displays static as well as dynamic content
 */
function render() {
    renderMenuCategories();
    renderMenuItems();
    generateEmptyBasketHTML();
    updateMobileBasketBtn();
}

/**
 * Renders the menu categories
 */
function renderMenuCategories() {
    let container = document.getElementById('menu-categories');
    container.innerHTML = '';

    for (i = 0; i < menuCategories.length; i++) {
        container.innerHTML += `
            <span id="menu-category-${i}" class="menu-category" onclick="selectMenuCategory(${i})">${menuCategories[i]}</span>
        `;
    }
}

/**
 * Renders the menu items
 */
function renderMenuItems() {
    let menuItemsContainer = document.getElementById('menu-items-container');
    menuItemsContainer.innerHTML = '';

    for (let i = 0; i < menuItems.length; i++) {
        menuItemsContainer.innerHTML += generateMenuItemsHTML(i);
    }

    // Select the first category as default = favorite meals
    document.getElementById('menu-category-0').classList.add('selected-menu-category');
}
function renderOptionItems() {
    let menuItemsContainer = document.getElementById('menu-items-container');
    menuItemsContainer.innerHTML = '';

    for (let i = 0; i < OptionItems.length; i++) {
        menuItemsContainer.innerHTML += generateMenuItemsHTML(i);
    }

    // Select the first category as default = favorite meals
    document.getElementById('menu-category-0').classList.add('selected-menu-category');
}
/**
 * Renders the basket items and updates the basket and the total
 */
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

/**
 * Adds an annotation button to the respective dish in the basket
 * @param {number} item The index of the current dish
 */
function renderAnnotationBtn(item) {
    if (menuItemsInBasket[item].annotation === '') {
        generateAddAnnotation(item);
    } else {
        generateEditAddAnnotation(item);
    }
}

// ####################################### MAIN FUNCTIONS #######################################

/**
 * Highlights the current menu category
 * @param {number} item The index of the menu category
 */
function selectMenuCategory(item) {
    document.getElementById(`menu-category-${item}`).classList.add('selected-menu-category');

    // De-select all other categories
    for (let i = 0; i < menuCategories.length; i++) {
        if (i !== item) {
            document.getElementById(`menu-category-${i}`).classList.remove('selected-menu-category');
        }
    }
}

/**
 * Opens the current dish and closes all other dishes
 * @param {number} item The index of the current dish
 */
function openMenuItem(item) {
    menuItemIsOpen[item] = !menuItemIsOpen[item];

    if (menuItemIsOpen[item] === true) {
        document.getElementById(`menu-item-basket-section-${item}`).classList.remove('d-none');
        document.getElementById(`menu-item-icon-${item}`).src = './assets/img/icons/close.svg';

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

/**
 * Closes the passed dish
 * With itemCounter[item] = 1; the default value for adding an item is restored
 * @param {number} item The index of the current dish
 */
function closeMenuItem(item) {
    document.getElementById(`menu-item-basket-section-${item}`).classList.add('d-none');
    document.getElementById(`menu-item-icon-${item}`).src = './assets/img/icons/plus.svg';

    itemCounter[item] = 1;
    document.getElementById(`menu-item-amount-${item}`).innerHTML = itemCounter[item];
}

/**
 * Increases the number of the selected dish for adding to the basket
 * @param {number} item The index of the current dish
 */
function itemCounterPlus(item) {
    itemCounter[item]++;
    document.getElementById(`menu-item-amount-${item}`).innerHTML = itemCounter[item];

    if (itemCounter[item] !== 1) {
        enableMinusBtn(item);
    }

    calcItemSubtotal(item);
}

/**
 * Decreases the number of the selected dish for adding to the basket
 * @param {number} item The index of the current dish
 */
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

/**
 * Calculates the subtotal of the respective dish
 * @param {number} item The index of the current dish
 */
function calcItemSubtotal(item) {
    let amount = itemCounter[item];
    let price = menuItems[item].price;
    let subTotal = amount * price;

    itemSubtotal[item] = subTotal;
    document.getElementById(`add-to-basket-btn-${item}`).innerHTML = convertPrice(subTotal) + ' €';
}

/**
 * Adds the current dish to the basket, updates the basket and closes all other dishes
 * @param {number} item The index of the current dish
 */
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

/**
 * Update the HTML
 */
function updateMobileBasketBtn() {
    let container = document.getElementById('mobile-basket-btn');
    container.innerHTML = `Warenkorb (${convertPrice(basketTotal)} €)`
}

/**
 * Multiplies the number of the dish by the price and returns the sum
 * @param {number} item 
 * @returns number = The subtotal of the dish
 */
function calcBasketItemSubtotal(item) {
    return menuItemsInBasket[item].amount * menuItemsInBasket[item].price;
}

/**
 * Calculates the sum of all dishes in the basket and their subtotal
 */
function calcBasketSubTotal() {
    let sum = 0;

    for (let i = 0; i < menuItemsInBasket.length; i++) {
        sum += menuItemsInBasket[i].total;
    }

    basketSubTotal = sum;
}

/**
 * Adds the delivery cost to the total amount of the dishes
 */
function calcBasketTotal() {
    basketTotal = basketSubTotal + deliveryCosts;
}

/**
 * Decreases the number of dish in the basket and updates the basket
 * @param {number} item The index of the current dish
 */
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

/**
 * Increases the number of dish in the basket and updates the basket
 * @param {number} item The index of the current dish
 */
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

/**
 * Deletes the dish from the basket and updates the items in the basket
 * @param {number} item The index of the current dish
 */
function deleteMenuitemInBasket(item) {
    menuItemsInBasket.splice(item, 1);
    renderBasketItems();
}

/**
 * Convert the notation of a floating point number from e.g. 10.7 => 10.70
 * @param {number} number 
 * @returns The converted price as number
 */
function convertPrice(number) {
    return number.toFixed(2).replace('.', ',');
}

/**
 * Go to the checkout, show an order confirmation and empty the basket
 */
function checkout() {
    menuItemsInBasket = [];
    showOrderSuccesful();
    renderBasketItems();
    closeMobileBasket();
}

/**
 * Displays the mobile basket
 */
function showMobileBasket() {
    document.getElementById('basket-section').classList.remove('hide-mobile');
    document.getElementById('basket-section').classList.add('mobile-basket');
    document.getElementById('mobile-basket-header').classList.remove('d-none');
    document.getElementById('basket-header').classList.add('d-none');
    document.body.style = 'overflow: hidden;'
}

/**
 * Closes the mobile basket
 */
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