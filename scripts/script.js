// ####################################### CONTROLS #######################################

function scrollToRight() {
    document.getElementById('menu-categories').scrollLeft -= 100;
}

function scrollToLeft() {
    document.getElementById('menu-categories').scrollLeft += 100;
}

function disableMinusBtn(item) {
    document.getElementById(`minus-btn-${item}`).style = 'background-color: #ebebeb;';
    document.getElementById(`minus-btn-${item}`).classList.add('no-hover');
    document.getElementById(`minus-btn-img-${item}`).src = './img/icons/minus_disabled.svg';

}

function enableMinusBtn(item) {
    document.getElementById(`minus-btn-${item}`).style = 'background-color: white';
    document.getElementById(`minus-btn-${item}`).classList.remove('no-hover');
    document.getElementById(`minus-btn-img-${item}`).src = './img/icons/minus.svg';
}

function enableCheckoutBtn() {
    document.getElementById('checkout-btn').classList.remove('checkout-btn-disabled');
    document.getElementById('checkout-btn').classList.add('checkout-btn-enabled');
    document.getElementById('checkout-btn').setAttribute('onclick', 'checkout()');
}

function scrollToTop() {
    window.scrollTo(0, 0)
}

function toggleLike() {
    liked = !liked;

    if (liked) {
        document.getElementById('like-img').src = './img/icons/favorite_heart_liked.svg';
    } else {
        document.getElementById('like-img').src = './img/icons/favorite_heart_unliked.svg';
    }
}

function enableUpBtn() {
    document.getElementById('sticky-up-btn-container').classList.remove('d-none');
}

function disableUpBtn() {
    document.getElementById('sticky-up-btn-container').classList.add('d-none');
}

// ####################################### POP-UPS #######################################

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

function showRestaurantInfo() {
    let container = document.getElementById('pop-up-container');
    container.innerHTML = '';
    container.innerHTML = generateRestaurantInfoHTML();

    document.body.style = 'overflow: hidden;';
}

function showOrderSuccesful() {
    let container = document.getElementById('pop-up-container');
    container.innerHTML = '';
    container.innerHTML = generateOrderSuccessfulHTML();

    document.body.style = 'overflow: hidden;';
}

function closePopUp() {
    let container = document.getElementById('pop-up-container');
    container.innerHTML = '';

    document.body.style = 'overflow: auto;';

    // Reset booleans
    languageAndCountrySelectionIsOpen = false;
    loginSectionIsOpen = false;
}

// ####################################### ANNOTATIONS #######################################

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

function showAnnotationContainer(item) {
    document.getElementById(`annotation-section-${item}`).classList.remove('d-none');
}

function showAnnotationOutput(item) {
    document.getElementById(`annotation-output-${item}`).classList.remove('d-none');
}

function hideAnnotationContainer(item) {
    document.getElementById(`annotation-section-${item}`).classList.add('d-none');
}

function hideAnnotationOutput(item) {
    document.getElementById(`annotation-output-${item}`).classList.add('d-none');
}

function closeAnnotation(item) {
    document.getElementById(`annotation-section-${item}`).innerHTML = '';
    document.getElementById(`annotation-section-${item}`).classList.add('d-none');
}

function textCounter(field, field2, maxlimit) {
    let countfield = document.getElementById(field2);
    if (field.value.length > maxlimit) {
        field.value = field.value.substring(0, maxlimit);
        return false;
    } else {
        countfield.innerHTML = maxlimit - field.value.length;
    }
}

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

function editAnnotation(item) {
    openAnnotation(item);
    document.getElementById(`annotation-input-${item}`).value = menuItemsInBasket[item].annotation;
    document.getElementById(`counter-${item}`).innerHTML = 160 - menuItemsInBasket[item].annotation.length;

}

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