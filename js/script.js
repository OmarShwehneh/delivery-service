// ####################################### CONTROLS #######################################

/**
 * Scrolls the menu categories to the right
 */
function scrollToRight() {
    document.getElementById('menu-categories').scrollLeft -= 100;
}

/**
 * Scrolls the menu categories to the left
 */
function scrollToLeft() {
    document.getElementById('menu-categories').scrollLeft += 100;
}

/**
 * Disables the minus button when the number of the dish is 1
 * @param {number} item The index of the current dish
 */
function disableMinusBtn(item) {
    document.getElementById(`minus-btn-${item}`).style = 'background-color: #ebebeb;';
    document.getElementById(`minus-btn-${item}`).classList.add('no-hover');
    document.getElementById(`minus-btn-img-${item}`).src = './assets/img/icons/minus_disabled.svg';

}

/**
 * Enables the minus button when the number of the dish is > 1
 * @param {number} item The index of the current dish
 */
function enableMinusBtn(item) {
    document.getElementById(`minus-btn-${item}`).style = 'background-color: white';
    document.getElementById(`minus-btn-${item}`).classList.remove('no-hover');
    document.getElementById(`minus-btn-img-${item}`).src = './assets/img/icons/minus.svg';
}

/**
 * Enables the checkout button
 */
function enableCheckoutBtn() {
    document.getElementById('checkout-btn').classList.remove('checkout-btn-disabled');
    document.getElementById('checkout-btn').classList.add('checkout-btn-enabled');
    document.getElementById('checkout-btn').setAttribute('onclick', 'checkout()');
}

/**
 * Scrolls to the top of the page
 */
function scrollToTop() {
    window.scrollTo(0, 0)
}

/**
 * Imitates the Like function for the restaurant
 * Changes the image from a half-full heart to a whole heart and vice versa
 */
function toggleLike() {
    liked = !liked;

    if (liked) {
        document.getElementById('like-img').src = './assets/img/icons/favorite_heart_liked.svg';
    } else {
        document.getElementById('like-img').src = './assets/img/icons/favorite_heart_unliked.svg';
    }
}

/**
 * Shows the up button
 */
function enableUpBtn() {
    document.getElementById('sticky-up-btn-container').classList.remove('d-none');
}

/**
 * Hides the up button
 */
function disableUpBtn() {
    document.getElementById('sticky-up-btn-container').classList.add('d-none');
}

// ####################################### POP-UPS #######################################

/**
 * Shows the language and country selection for the page
 */
function showLanguageAndCountrySelection() {

    if (languageAndCountrySelectionIsOpen === false) {

        languageAndCountrySelectionIsOpen = !languageAndCountrySelectionIsOpen;

        let container = document.getElementById('pop-up-container');
        container.innerHTML = '';
        container.innerHTML = generateLanguageAndCountrySectionHTML();

    } else {
        closePopUp();
    }
}

/**
 * Shows the login area of the page
 */
function showLoginSection() {

    if (loginSectionIsOpen === false) {

        loginSectionIsOpen = !loginSectionIsOpen;

        let container = document.getElementById('pop-up-container');
        container.innerHTML = '';
        container.innerHTML = generateLoginSectionHTML();

        document.body.style = 'overflow: hidden;';

    } else {
        closePopUp();
    }
}

/**
 * Shows all allergens of the respective dish
 * @param {number} item The index of the current dish
 */
function showAllergenic(item) {
    let container = document.getElementById('pop-up-container');
    container.innerHTML = '';
    container.innerHTML = generateAllergenicHTML();

    let list = document.getElementById('allergenic-list');
    let allergenic = menuItems[item].allergenic;
    document.body.style = 'overflow: hidden;';

    for (let i = 0; i < allergenic.length; i++) {
        list.innerHTML += `
            <li>${menuItems[item].allergenic[i]}</li>
        `;
    }
}

/**
 * Opens the restaurant info
 */
function showRestaurantInfo() {
    let container = document.getElementById('pop-up-container');
    container.innerHTML = '';
    container.innerHTML = generateRestaurantInfoHTML();

    document.body.style = 'overflow: hidden;';
}

/**
 * Displays the order confirmation after checkout();.
 */
function showOrderSuccesful() {
    let container = document.getElementById('pop-up-container');
    container.innerHTML = '';
    container.innerHTML = generateOrderSuccessfulHTML();

    document.body.style = 'overflow: hidden;';
}

/**
 * Closes the PupUp Section
 */
function closePopUp() {
    let container = document.getElementById('pop-up-container');
    container.innerHTML = '';

    document.body.style = 'overflow: auto;';

    // Reset booleans
    languageAndCountrySelectionIsOpen = false;
    loginSectionIsOpen = false;
}

// ####################################### ANNOTATIONS #######################################

/**
 * Opens the field for adding an annotation
 * @param {number} item The index of the current dish
 */
function openAnnotation(item) {
    showAnnotationContainer(item);

    let container = document.getElementById(`annotation-section-${item}`);
    container.innerHTML = generateAnnotationHTML(item);

    if (menuItemsInBasket[item].annotation < 1) {
        generateAddAnnotationBtns(item);
    } else {
        generateEditAnnotationBtns(item);
    }
}

/**
 * Shows the container of the whole annotation
 * @param {number} item The index of the current dish
 */
function showAnnotationContainer(item) {
    document.getElementById(`annotation-section-${item}`).classList.remove('d-none');
}

/**
 * Shows the annotation written by the user
 * @param {number} item The index of the current dish
 */
function showAnnotationOutput(item) {
    document.getElementById(`annotation-output-${item}`).classList.remove('d-none');
}

/**
 * Hides the container of the whole annotation
 * @param {number} item The index of the current dish
 */
function hideAnnotationContainer(item) {
    document.getElementById(`annotation-section-${item}`).classList.add('d-none');
}

/**
 * Hides the annotation written by the user
 * @param {number} item The index of the current dish
 */
function hideAnnotationOutput(item) {
    document.getElementById(`annotation-output-${item}`).classList.add('d-none');
}

/**
 * Closes adding or editing an annotation
 * @param {number} item The index of the current dish
 */
function closeAnnotation(item) {
    document.getElementById(`annotation-section-${item}`).innerHTML = '';
    document.getElementById(`annotation-section-${item}`).classList.add('d-none');
}

/**
 * Counts and limits the characters that can be written in an annotation
 * @param {HTMLElement} field this = The textarea
 * @param {HTMLElement} field2 The counter output
 * @param {number} maxlimit The limit of characters
 * @returns The number of characters entered
 */
function textCounter(field, field2, maxlimit) {
    let countfield = document.getElementById(field2);
    if (field.value.length > maxlimit) {
        field.value = field.value.substring(0, maxlimit);
        return false;
    } else {
        countfield.innerHTML = maxlimit - field.value.length;
    }
}

/**
 * Adds an annotation to the dish
 * @param {number} item The index of the current dish
 */
function addAnnotation(item) {
    showAnnotationOutput(item);
    document.getElementById(`basket-item-body-${item}`).style = 'padding-bottom: 0;';

    menuItemsInBasket[item].annotation = document.getElementById(`annotation-input-${item}`).value;

    let container = document.getElementById(`annotation-output-${item}`);
    container.innerHTML = '';
    container.innerHTML = menuItemsInBasket[item].annotation;

    document.getElementById(`annotation-input-${item}`).value = '';

    renderAnnotationBtn(item);
    closeAnnotation(item);
}

/**
 * Edits an annotation of the dish
 * @param {number} item The index of the current dish
 */
function editAnnotation(item) {
    openAnnotation(item);
    document.getElementById(`annotation-input-${item}`).value = menuItemsInBasket[item].annotation;
    document.getElementById(`counter-${item}`).innerHTML = 160 - menuItemsInBasket[item].annotation.length;

}

/**
 * Deletes an annotation of the dish
 * @param {number} item The index of the current dish
 */
function deleteAnnotation(item) {
    let container = document.getElementById(`annotation-output-${item}`);
    container.innerHTML = '';
    document.getElementById(`annotation-input-${item}`).value = '';

    menuItemsInBasket[item].annotation = '';

    document.getElementById(`basket-item-body-${item}`).style = 'padding-bottom: 16px;';

    hideAnnotationContainer(item);
    hideAnnotationOutput(item);
    renderAnnotationBtn(item);
}