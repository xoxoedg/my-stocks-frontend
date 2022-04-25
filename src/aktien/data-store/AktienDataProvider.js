import {useState, useEffect} from "react";
import RequestHandler from "../RequestHandler";
import AktienContext from "./AktienContext";


function AktienDataProvider(props) {
    const [selectedAktien, setSelectedAktien] = useState([])
    const requestHandler = new RequestHandler()

    useEffect(() => {
        console.log("USE EFFECT")
        // requestHandler.showSelectedAktien().then(response => {
        //     setSelectedAktien(response.data)
        // });
    }, [])


    function prefillHandler() {
        console.log("PREFILL")
        return requestHandler.showAktienAuswahl()
    }

    return (
        <AktienContext.Provider value={{
            selectedAktien: selectedAktien,
            onPrefill: prefillHandler,
        }}>
            {props.children}
        </AktienContext.Provider>
    )

}

export default AktienDataProvider;