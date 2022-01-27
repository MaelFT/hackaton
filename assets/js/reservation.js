let url = document.location.href;
let param = url.substring(url.lastIndexOf("?") + 1);
let param1 = param.substring(0, 1);
let param2 = param.substring(2);

let schedule = "";
let theme = "";
let img = "";
let price = 39;
let pa = 2;

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
    reservationParam.innerHTML = `
    <div>
        <h2>RÉSERVATION</h2>
        <div class="reserveDate">
            <p>MARDI 01 / 02 / 2022</p>
        </div>
        <div class="reserveParam">
            <div class="reserveOption">
                <p id="ch">Vous avez choisi</p>
                <p></p>
                <p id="h">${schedule}</p>
                <p id="th"><strong>${theme}</strong></p>
                <p id="pa">PARTICIPANTS</p>
                <select name="number" id="paNumber">
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                <p id="pri">PRIX</p>
                <p id="npri">${price}€</p>
                <a href="./schedule.html">
                    <input type="button" value="ANNULER" id="cbtn">
                </a>
                <div id="linkConfirm">
                    <a href="./confirm.html?${param1},${param2},${price},${pa}">
                        <input type="button" value="RESERVER" id="gbtn">
                    </a>
                </div>
            </div>
            <div>
            ${img}
            </div>
        </div>
    </div>
    `
}
createPage();

// Sélection du nombre de participants et changement du prix en fonction du nombre de participants
paNumber.addEventListener("click", (e) => {
    switch (e.target.value) {
        case "2":
            price = 39;
            pa = 2;
            break;
        case "3":
            price = 51;
            pa = 3;
            break;
        case "4":
            price = 66;
            pa = 4;
            break;
        case "5":
            price = 81;
            pa = 5;
            break;
        case "6":
            price = 96;
            pa = 6;
            break;
        case "7":
            price = 111;
            pa = 7;
            break;
        case "8":
            price = 126;
            pa = 8;
            break;
        case "9":
            price = 141;
            pa = 9;
            break;
        case "10":
            price = 156;
            pa = 10;
            break;
        case "11":
            price = 171;
            pa = 11;
            break;
        case "12":
            price = 186;
            pa = 12;
            break;
    }

    // Changement de la structure HTML en fonction du nombre de participants sélectionnés
    npri.innerHTML = `${price}€`
    linkConfirm.innerHTML = `                    
    <a href="./confirm.html?${param1},${param2},${price},${pa}">
        <input type="button" value="RESERVER" id="gbtn">
    </a>`
})