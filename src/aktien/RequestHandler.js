// noinspection JSUnresolvedVariable

"use strict";

import axios from "axios";
import {Aktie} from "./structs/AktienStructs";

const BASE_URL = "http://127.0.0.1:5000";

class RequestHandler {

    showAktienAuswahl() {
        return axios.get(BASE_URL + "/aktie/auswahl")
    }

    showAktien() {
        return axios.get(BASE_URL + "/aktie").then(response => {
            let aktiveAktien = []
            for (let item of response.data) {
                let aktie = new Aktie(item.name, item.aktueller_preis, item.naechster_quarterly)
                aktiveAktien.push(aktie)
            }
            return aktiveAktien;
        });
    }

    auswahlBestaetigen(requestDto) {
        return axios.post(BASE_URL + "/aktie/auswahl", requestDto)
    }

}

export default RequestHandler;