import {useEffect, useState} from "react";
import RequestHandler from "../RequestHandler";
import AktienContext from "./AktienContext";


function AktienDataProvider(props) {
    const [selectedAktien, setSelectedAktien] = useState([])
    const requestHandler = new RequestHandler()

    useEffect(() => {
        // requestHandler.showSelectedAktien().then(response => {
        //     setSelectedAktien(response.data)
        // });
    }, [])


    return (
        <AktienContext.Provider value={{
            selectedAktien: selectedAktien,
        }}>
            {props.children}
        </AktienContext.Provider>
    )

}

export default AktienDataProvider;