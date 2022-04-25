import React from "react";
import AktienDataProvider from "./data-store/AktienDataProvider";
import AktienComponent from "./AktienComponent";

function AktienPage() {
    return (
        <React.Fragment>
            <AktienDataProvider>
                <AktienComponent/>
            </AktienDataProvider>
        </React.Fragment>
    )

}

export default AktienPage;