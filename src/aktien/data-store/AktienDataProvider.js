import {useState, useEffect} from "react";
import RequestHandler from "../RequestHandler";
import AktienContext from "./AktienContext";
import {AuswahlBestaetigenRequestDto} from "../structs/AktienStructs"


function AktienDataProvider(props) {
    const [selectedAktien, setSelectedAktien] = useState([])
    const requestHandler = new RequestHandler()

    useEffect(() => {
        // requestHandler.showSelectedAktien().then(response => {
        //     setSelectedAktien(response.data)
        // });
    }, [])

    function auswahlBestaetigen(ausgewaehlteAktien) {
        const requestDto = new AuswahlBestaetigenRequestDto(ausgewaehlteAktien)
        requestHandler.auswahlBestaetigen(requestDto).then(response => null)
    }

    return (
        <AktienContext.Provider value={{
            selectedAktien: selectedAktien,
            auswahlBestaetigen: auswahlBestaetigen
        }}>
            {props.children}
        </AktienContext.Provider>
    )

}

export default AktienDataProvider;