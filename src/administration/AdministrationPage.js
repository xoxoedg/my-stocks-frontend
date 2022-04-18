import React from "react";
import LookupComponent from "./look-ups/LookupComponent";
import LookupDataProvider from "./look-ups/data-store/LookupDataProvider";


function AdministrationPage() {
    return (
        <React.Fragment>
            <LookupDataProvider>
                <LookupComponent/>
            </LookupDataProvider>
        </React.Fragment>
    )

}

export default AdministrationPage;