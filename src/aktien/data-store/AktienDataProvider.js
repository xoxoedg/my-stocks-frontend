import {useEffect, useState} from "react";
import RequestHandler from "../RequestHandler";
import AktienContext from "./AktienContext";
import {AuswahlBestaetigenRequestDto} from "../structs/AktienStructs"


function AktienDataProvider(props) {
    const [aktien, setAktien] = useState([])
    const requestHandler = new RequestHandler()

    useEffect(() => {
        requestHandler.showAktien().then(aktiveAktien => {
            setAktien(aktiveAktien)
        });

    }, [])

    function auswahlBestaetigen(ausgewaehlteAktien) {
        const requestDto = new AuswahlBestaetigenRequestDto(ausgewaehlteAktien)
        requestHandler.auswahlBestaetigen(requestDto).then(response => null)
    }

    return (
        <AktienContext.Provider value={{
            aktien: aktien,
            auswahlBestaetigen: auswahlBestaetigen
        }}>
            {props.children}
        </AktienContext.Provider>
    )

}

export default AktienDataProvider;