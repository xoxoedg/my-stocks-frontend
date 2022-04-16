"use strict";

import axios from "axios";

class RequestHandler {
    constructor() {
        this.deleteUrl = "http://127.0.0.1:5000/administration/lookups/loeschen/";
        this.editUrl = "";
        this.getUrl = "http://127.0.0.1:5000/administration/lookups"
        this.postUrl = "http://127.0.0.1:5000/administration/lookups/anlegen"
    }

    handleLookupPostRequest(neuerEintrag) {
        return axios.post(this.postUrl, neuerEintrag).then().catch();
    }

    handleLookupDeleteRequest(eintragToDelete) {
        console.log(this.deleteUrl + eintragToDelete)
        return axios.delete(this.deleteUrl + eintragToDelete)
    }

    handleLookupGetRequest() {
        return axios.get(this.getUrl)
    }

}

export default RequestHandler;