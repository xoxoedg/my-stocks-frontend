import React from "react";

const AktienContext = React.createContext({
        aktien: [{}],
        auswahlBestaetigen: () => {},
    }
)


export default AktienContext;