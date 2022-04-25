import React from "react";

const AktienContext = React.createContext({
        selectedAktien: [{}],
        aktienAuswahl: [{}],
        onPrefill: () => {
        },
    }
)


export default AktienContext;