import React from "react";

const LookupContext = React.createContext({
    requestData: [{}],
    onAnlegen: () => {},
    onLoeschen: () => {},
    onPrefill: () => {},
    onEdit: ()=>{},
}
)


export default LookupContext;