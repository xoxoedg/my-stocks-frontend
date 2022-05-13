import React from "react";

const AktienContext = React.createContext({
        selectedAktien: [{}],
        auswahlBestaetigen: () => {},
    }
)


export default AktienContext;