function generateLanguageAndCountrySectionHTML() {
    return `
    <div class="pop-up-container-language-country hide-mobile" onclick="closePopUp()">
        <div id="language-country-container" class="language-country-container" onclick="event.stopPropagation()">
            <div class="countries-container">
                <h3 class="languague-country-heading">Land</h3>
                <div class="countries">
                    <div class="country">
                        <img src="./img/icons/countries/austria.svg" alt="Österreich"> 
                        <span class="language-country-text"><b>Österreich</b></span>
                    </div>
                    <div class="country">
                        <img src="./img/icons/countries/australia.svg" alt="Australien"> 
                        <span class="language-country-text">Australien</span>
                    </div>
                    <div class="country">
                        <img src="./img/icons/countries/belgium.svg" alt="Belgien"> 
                        <span class="language-country-text">Belgien</span>
                    </div>
                    <div class="country">
                        <img src="./img/icons/countries/bulgaria.svg" alt="Bulgarien"> 
                        <span class="language-country-text">Bulgarien</span>
                    </div>
                    <div class="country">
                        <img src="./img/icons/countries/denmark.svg" alt="Dänemark"> 
                        <span class="language-country-text">Dänemark</span>
                    </div>
                    <div class="country">
                        <img src="./img/icons/countries/germany.svg" alt="Deutschland"> 
                        <span class="language-country-text">Deutschland</span>
                    </div>
                    <div class="country">
                        <img src="./img/icons/countries/france.svg" alt="Frankreich"> 
                        <span class="language-country-text">Frankreich</span>
                    </div>
                    <div class="country">
                        <img src="./img/icons/countries/israel.svg" alt="Israel"> 
                        <span class="language-country-text">Israel</span>
                    </div>
                    <div class="country">
                        <img src="./img/icons/countries/canada.svg" alt="Kanada"> 
                        <span class="language-country-text">Kanada</span>
                    </div>
                    <div class="country">
                        <img src="./img/icons/countries/new-zealand.svg" alt="Neuseeland"> 
                        <span class="language-country-text">Neuseeland</span>
                    </div>
                    <div class="country">
                        <img src="./img/icons/countries/norway.svg" alt="Norwegen"> 
                        <span class="language-country-text">Norwegen</span>
                    </div>
                    <div class="country">
                        <img src="./img/icons/countries/portugal.svg" alt="Portugal"> 
                        <span class="language-country-text">Portugal</span>
                    </div>
                    <div class="country">
                        <img src="./img/icons/countries/romania.svg" alt="Rumänien"> 
                        <span class="language-country-text">Rumänien</span>
                    </div>
                    <div class="country">
                        <img src="./img/icons/countries/spain.svg" alt="Spanien"> 
                        <span class="language-country-text">Spanien</span>
                    </div>
                    <div class="country">
                        <img src="./img/icons/countries/united-kingdom.svg" alt="Vereinigtes Königreich"> 
                        <span class="language-country-text">Vereinigtes Königreich</span>
                    </div>
                </div>
            </div>
            <div class="languages-container">
                <h3 class="languague-country-heading">Sprache</h3>
                <div class="languages">
                    <span class="language-country-text"><b>Deutsch</b></span>
                    <span class="language-country-text">English</span>
                    <span class="language-country-text">Français</span>
                    <span class="language-country-text">Nederlands</span>
                    <span class="language-country-text">Polski</span>
                    <span class="language-country-text">Norsk</span>
                    <span class="language-country-text">Dansk</span>
                    <span class="language-country-text">Português</span>
                    <span class="language-country-text">Română</span>
                    <span class="language-country-text">Български</span>
                    <span class="language-country-text">Italiano</span>
                </div>
            </div>
        </div>
    </div>
    `;
}

function generateLoginSectionHTML() {
    return `
    <div class="pop-up-container" onclick="closePopUp()">
        <div class="login-section" onclick="event.stopPropagation()">
            <div class="login-section-header">
                <div class="login-section-header-subcontainer">
                    <div class="login-img-container">
                        <img src="./img/icons/smile.svg" alt="Smile">
                    </div>
                    <div>
                        <h3 class="login-section-heading">Mein Account</h3>
                        <span class="login-section-text">Persönliche Informationen anzeigen</span>
                    </div>
                </div>
                <button class="close-btn" onclick="closePopUp()">
                    <img src="./img/icons/close_white.svg" alt="Schließen">
                </button>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div class="login-section-body">
                <button class="login-btn btns">Anmelden</button>
                <button class="create-acc-btn btns">Account erstellen</button>
            </div>
        </div>
    </div>
    `;
}

function generateMenuItemsHTML(i) {
    return `
    <div id="menu-item-${i}" class="menu-items" onclick="openMenuItem(${i})">
        <div class="menu-item-header menu-items-border-spacing">
            <h3 class="menu-item-title">${menuItems[i].name}</h3>
            <a class="product-information" onclick="showAllergenic(${i})">Produktinfo</a>
        </div>
        <div class="add-to-basket-container">
            <img src="./img/icons/plus.svg" alt="Plus" id="menu-item-icon-${i}" class="menu-item-icon">
        </div>
        <div class="menu-item-body menu-items-border-spacing">
            <span class="menu-item-description">${menuItems[i].description}</span>
            <h3 class="menu-item-price">${convertPrice(menuItems[i].price)} €</h3>
        </div>
        <div id="menu-item-basket-section-${i}" class="d-none menu-item-basket-section menu-items-border-spacing" onclick="event.stopPropagation()">
            <div class="menu-item-add-to-basket-counter">
                <button id="minus-btn-${i}" class="minus-btn btns" onclick="itemCounterMinus(${i})"><img src="./img/icons/minus.svg" alt="Minus" id="minus-btn-img-${i}" class="menu-item-icon-img"></button>
                <div id="menu-item-amount-${i}" class="menu-item-amount">${itemCounter[i] = 1}</div>
                <button class="plus-btn btns" onclick="itemCounterPlus(${i})"><img src="./img/icons/plus.svg" alt="Plus" class="menu-item-icon-img"></button>
            </div>
            <button id="add-to-basket-btn-${i}" class="add-to-basket-btn btns" onclick="addToBasket(${i})"></button>
        </div>
    </div>
`;
}

function generateEmptyBasketHTML() {
    let basket = document.getElementById('basket-container');
    basket.innerHTML += `
        <div class="empty-basket-container">
            <img src="./img/icons/shopping_bag.svg" alt="Warenkorb" class="shopping-bag-icon">
            <h3>Fülle deinen Warenkorb</h3>
            <span class="empty-basket-text">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</span>
        </div>
    `;
}

function generateBasketItemsHTML(i) {
    return `
    <div class="basket-item-container">
        <div class="basket-item-header">
            <div class="basket-item-name-and-amount">
                <span><b id="item-amount-in-basket-${i}">${menuItemsInBasket[i].amount}</b></span>
                <span><b>${menuItemsInBasket[i].name}</b></span>
            </div>
            <span id="item-total-in-basket-${i}">${convertPrice(menuItemsInBasket[i].total) + ' €'}</span>
        </div>
        <div id="basket-item-body-${i}" class="basket-item-body">
            <div class="basket-item-body-subcontainer">
                <div id="annotation-btn-${i}"></div>
                <div class="basket-item-counter-btns">
                    <button class="minus-btn btns" onclick="decreaseItemInBasket(${i})"><img src="./img/icons/minus.svg" alt="Minus" class="menu-item-icon-img"></button>
                    <button class="plus-btn btns" onclick="increaseItemInBasket(${i})"><img src="./img/icons/plus.svg" alt="Plus" class="menu-item-icon-img"></button>
                </div>
            </div>
        </div>
        <span id="annotation-output-${i}" class="annotation-output d-none">${menuItemsInBasket[i].annotation}</span>
        <div id="annotation-section-${i}" class="annotation-section d-none"></div>
    </div>
`;
}

function generateAnnotationHTML(item) {
    return `
    <div id="annotation-container-${item}" class="annotation-container">
        <textarea onkeyup="textCounter(this,'counter-${item}', 160);" id="annotation-input-${item}" class="annotation-input"></textarea>
        <div class="annotation-counter">
            <span id="counter-${item}" class="counter-number">160</span><span class="counter-number">/160</span>
        </div>
        <div id="annotation-btns-${item}" class="annotation-control"></div>
    </div>
    `;
}

function generateAddAnnotation(item) {
    let container = document.getElementById(`annotation-btn-${item}`);
    container.innerHTML = '';
    container.innerHTML = `
		<button class="annotation-btn btns" onclick="openAnnotation(${item})">Anmerkung hinzufügen</button>
	`;
}

function generateEditAddAnnotation(item) {
    let container = document.getElementById(`annotation-btn-${item}`);
    container.innerHTML = '';
    container.innerHTML = `
		<button class="annotation-btn btns" onclick="editAnnotation(${item})">Anmerkung bearbeiten</button>
	`;
}

function generateAddAnnotationBtns(item) {
    let container = document.getElementById(`annotation-btns-${item}`);
    container.innerHTML = '';
    container.innerHTML = `
		<button class="annotation-control-btn btns" onclick="deleteAnnotation(${item})">Abbrechen</button><button class="annotation-control-btn btns" onclick="addAnnotation(${item})">Hinzufügen</button>
	`;
}

function generateEditAnnotationBtns(item) {
    let container = document.getElementById(`annotation-btns-${item}`);
    container.innerHTML = '';
    container.innerHTML = `
		<button class="annotation-control-btn btns" onclick="deleteAnnotation(${item})">Löschen</button><button class="annotation-control-btn btns" onclick="addAnnotation(${item})">Speichern</button>
	`;
}

function generateBasketSummaryHTML() {
    return `
    <div class="basket-summary">
        <table>
            <tr>
                <td>Zwischensumme</td>
                <td>${convertPrice(basketSubTotal) + ' €'}</td>
            </tr>
            <tr>
                <td>Lieferkosten</td>
                <td>${convertPrice(deliveryCosts) + ' €'}</td>
            </tr>
            <tr>
                <td><b>Gesamt</b></td>
                <td><b>${convertPrice(basketTotal) + ' €'}</b></td>
            </tr>
        </table>
    </div>
`;
}

function generateMinOrderValueNotReacheHTML() {
    return `
    <div class="min-order-value-not-reached">
        <span class="min-order-value-text">Benötigter Betrag, um den<br> Mindestbestellwert zu erreichen</span>
        <span class="min-order-value">${convertPrice(minimumOrderValue - basketSubTotal) + ' €'}</span>
    </div>
    <div class="min-order-value-not-reached-sub-text">
        Leider kannst du noch nicht bestellen. Japanisches Restaurant liefert erst ab einem Mindestbestellwert von ${convertPrice(minimumOrderValue) + ' €'} (exkl. Lieferkosten).
    </div>
`;
}

function generateAllergenicHTML() {
    return `
    <div id="allergenic-container" class="pop-up-container" onclick="closePopUp()">
        <div class="allergenic" onclick="event.stopPropagation()">
            <div class="pop-up-header">
                <h3>Weitere Produktinformationen</h3>
                <button class="close-btn" onclick="closePopUp()">
                    <img src="./img/icons/close_black.svg" alt="Schließen">
                </button>
            </div>
            <div class="allergenic-body">
                <h3>Allergene</h3>
                <ul id="allergenic-list">
                </ul>
                <span class="allergenic-text">Wir halten Dich stets zu relevanten Informationen über Essen auf dem Laufenden, die wir von dem Restaurant bezüglich ihrer Speisekarten erhalten. Es kann jedoch vorkommen, dass die angezeigten Informationen unvollständig sind bzw. automatisch generiert und/oder von den Restaurants noch nicht auf Korrektheit überprüft wurden. Bitte wende Dich an unseren Kundenservice, wenn Allergien oder Intoleranzen vorliegen oder Du Fragen zu bestimmten Speisen auf der Karte hast.</span>
            </div>
        </div>
    </div>
    `;
}

function generateRestaurantInfoHTML() {
    return `
    <div id="restaurant-info-container" class="pop-up-container" onclick="closePopUp()">
        <div class="restaurant-info" onclick="event.stopPropagation()">
            <div class="pop-up-header">
                <h3>Über das Restaurant</h3>
                <button class="close-btn" onclick="closePopUp()">
                    <img src="./img/icons/close_black.svg" alt="Schließen">
                </button>
            </div>
            <div class="restaurant-info-body">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1298.492968466941!2d14.286479291670172!3d48.305697215691204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47739719dfa50243%3A0xeecd03e396b6c102!2sHauptplatz!5e0!3m2!1sde!2sat!4v1644690648793!5m2!1sde!2sat"
                    class="google-maps">
            </iframe>
                <div class="restaurant-info-heading">
                    <img src="./img/icons/time_left.svg" alt="Lieferzeiten">
                    <h3>Lieferzeiten</h3>
                </div>
                <div class="restaurant-info-content">
                    <table>
                        <tr>
                            <td>Montag</td>
                            <td>11:00 - 22:15</td>
                        </tr>
                        <tr>
                            <td>Dienstag</td>
                            <td>11:00 - 22:15</td>
                        </tr>
                        <tr>
                            <td>Mittwoch</td>
                            <td>11:00 - 22:15</td>
                        </tr>
                        <tr>
                            <td>Donnerstag</td>
                            <td>11:00 - 22:15</td>
                        </tr>
                        <tr>
                            <td>Freitag</td>
                            <td>11:00 - 22:15</td>
                        </tr>
                        <tr>
                            <td>Samstag</td>
                            <td>11:00 - 22:15</td>
                        </tr>
                        <tr>
                            <td>Sonntag</td>
                            <td>11:00 - 22:15</td>
                        </tr>
                    </table>
                </div>
                <div class="restaurant-info-heading">
                    <img src="./img/icons/delivery_motorbike.svg" alt="Lieferung Motorrad">
                    <h3>Lieferkosten</h3>
                </div>
                <div class="restaurant-info-content">
                    <table>
                        <tr>
                            <td>Mindestbestellwert</td>
                            <td>15,00 €</td>
                        </tr>
                        <tr>
                            <td>Lieferkosten</td>
                            <td>Gratis</td>
                        </tr>
                    </table>
                </div>
                <div class="restaurant-info-heading">
                    <img src="./img/icons/payment.svg" alt="Bezahlung">
                    <h3>Bezahlmethoden</h3>
                </div>
                <div class="restaurant-info-content">
                    <div class="payment-method"><img src="./img/icons/paypal.svg" alt="PayPal" title="PayPal"></div>
                    <div class="payment-method"><img src="./img/icons/credit_card.svg" alt="Credit Card" title="Kreditkarte"></div>
                    <div class="payment-method"><img src="./img/icons/money.svg" alt="Bargeld" title="Bargeld"></div>
                    <div class="payment-method"><img src="./img/icons/coupon.svg" alt="Gutschein" title="Gutschein"></div>
                </div>
                <div class="restaurant-info-heading">
                    <img src="./img/icons/building.svg" alt="Impressum">
                    <h3>Impressum</h3>
                </div>
                <div class="restaurant-info-content bottom-spacing">
                    Japanisches Restaurant<br> Straße Hausnummer<br> Postleitzahl Ort<br> Land
                </div>
            </div>
        </div>
    </div>
    `;
}

function generateOrderSuccessfulHTML() {
    return `
    <div id="order-successful-container" class="pop-up-container" onclick="closePopUp()">
        <div class="order-successful" onclick="event.stopPropagation()">
            <div class="pop-up-header">
                <h3>Vielen Dank für deine Bestellung!</h3>
                <button class="close-btn" onclick="closePopUp()">
                    <img src="./img/icons/close_black.svg" alt="Schließen">
                </button>
            </div>
            <div class="order-successful-body">
                <h3>Deine Bestellung wird in ungefähr 60 Minuten bei dir zu Hause ankommen!</h3>
                <img src="./img/icons/smile.svg" alt="Smile">
            </div>
        </div>
    </div>
    `;
}