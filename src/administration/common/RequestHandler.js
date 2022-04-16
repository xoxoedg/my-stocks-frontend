"use strict";

import axios from "axios";

class RequestHandler {
    constructor() {
        this.deleteUrl = "http://127.0.0.1:5000/administration/lookups/loeschen/";
        this.editUrl = "http://127.0.0.1:5000/administration/lookups/bearbeiten";
        this.getUrl = "http://127.0.0.1:5000/administration/lookups"
        this.postUrl = "http://127.0.0.1:5000/administration/lookups/anlegen"
        this.specificGetUrl ="http://127.0.0.1:5000/administration/lookups/"
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

    handleSpecificLookupGetRequest(appName) {
        return axios.get(this.specificGetUrl + appName)
    }

    handleEditLookupRequest(lookupEntry) {
        return axios.put(this.editUrl, lookupEntry)
    }

}

export default RequestHandler;