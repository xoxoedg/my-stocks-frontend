"use strict";

import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000";

class RequestHandler {

    // TODO: filter query param auswahl?
    showAktienAuswahl() {
        console.log("Firing Request")
        return axios.get(BASE_URL + "/aktien")
    }

}

export default RequestHandler;