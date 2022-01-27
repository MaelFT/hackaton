let url = document.location.href;
let param = url.substring(url.lastIndexOf("?") + 1);
let param1 = param.substring(0, 1);
let param2 = param.substring(2);

let schedule = "";
let theme = "";
let img = "";

const createPage = () => {
    console.log(param1);
    console.log(param2);
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
    switch (param2) {
        case "0":
            theme = "CHUCKY HORROR SHOW";
            url = `<img id="img" src="./assets/img/room/CHUCKY2.png" alt="CHUCKY">`;
            break;
        case "1":
            url = `<img id="img" src="./assets/img/room/CHATEAU1.png" alt="CHATEAU">`;
            theme = "LE CHATEAU AMBULANT";
            break;
        case "2":
            url = `<img id="img" src="./assets/img/room/SUB-BORDEAUX3.png" alt="SUB-BORDEAUX3">`;
            theme = "LES SOUTERRAINS DE BORDEAUX";
            break;
        case "3":
            url = `<img id="img" src="./assets/img/room/HACKATON.png" alt="HACKATON">`;
            theme = "HACKATON";
            break;
        default:
            url = `<p id="img">IMAGE NOT FOUND</p>`
            theme = `<p id="th">THEME NOT FOUND</p>`
            break;
    }

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
                <p id="th">${theme}</p>
                <p id="pa">PARTICIPANTS</p>
                <select name="number" id="paNumber">
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                </select>
                <p id="pri">PRIX</p>
                <p id="npri">39 €</p>
                <input type="button" value="ANNULER" id="cbtn">
                <input type="button" value="RESERVER" id="gbtn">
            </div>
            <div>
            ${url}
            </div>
        </div>
    </div>
    `
}
createPage();
