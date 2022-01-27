let url = document.location.href;
let param = url.substring(url.lastIndexOf("?") + 1);
param = param.split(",");
let param1 = param[0];
let param2 = param[1];
let param3 = param[2];
let param4 = param[3];

let schedule = "";
let img = "";
let theme = "";
let price = `${param3}`;
let pa = `${param4}`

// Création de la page
const createPage = () => {
    // Récupération de l'horaire
    switch (param1) {
        case "0":
            schedule = "18.00 - 19.00"
            break;
        case "1":
            schedule = "19.00 - 20.00"
            break;
        case "2":
            schedule = "20.00 - 21.00"
            break;
        case "3":
            schedule = "21.00 - 22.00"
            break;
        case "4":
            schedule = "22.00 - 23.00"
            break;
        case "5":
            schedule = "23.00 - 00.00"
            break;
        default:
            schedule = `<p id="h">SCHEDULE NOT FOUND</p>`
            break;
    }
    // Récupération du theme et de l'image
    switch (param2) {
        case "0":
            img = `<img id="img" src="./assets/img/room/CHUCKY2.png" alt="CHUCKY HORROR SHOW">`;
            theme = "CHUCKY HORROR SHOW";
            break;
        case "1":
            img = `<img id="img" src="./assets/img/room/CHATEAU1.png" alt="LE CHATEAU AMBULANT">`;
            theme = "LE CHATEAU AMBULANT";
            break;
        case "2":
            img = `<img id="img" src="./assets/img/room/SUB-BORDEAUX3.png" alt="LES SOUTERRAINS DE BORDEAUX">`;
            theme = "LES SOUTERRAINS DE BORDEAUX";
            break;
        case "3":
            img = `<img id="img" src="./assets/img/room/HACKATON.png" alt="HACKATON">`;
            theme = "HACKATON";
            break;
        default:
            img = `<p id="img">IMAGE NOT FOUND</p>`
            theme = `<p id="th">THEME NOT FOUND</p>`
            break;
    }

    // Création de la structure HTML
    confirmParam.innerHTML = `
    <div>
        <h2>PANIER</h2>
        <div class="confirmSett">
            <div class="confirmOption">
                <div class="confirmSettings">
                    <p id="theme"><strong>${theme}</strong></p>
                    <p></p>
                    <p>01 / 02 / 2022</p>
                    <p>${schedule}</p>
                    <p>PARTICIPANTS</p>
                    <p>${pa}</p>
                    <p>PRIX</p>
                    <p>${price}€</p>
                </div>
                <div>
                    ${img}
                </div>
            </div>
            <div class="confirmTotal">
                <h3>TOTAL</h3>
                <div class="priceTotal">
                    <span>SUBTOTAL</span>
                    <span>${price}€</span>
                </div>    
                <input type="button" value="PAYER" id="payment">
            </div>
        </div>
    </div>
    `
}
createPage();