import React, {useContext, useState} from "react";
import AktienContext from "../aktien/data-store/AktienContext";
import {Box} from "@mui/material";
import Button from "@mui/material/Button";
import AktienAuswahlModal from "./aktien-modal/AktienAuswahlModal";


function AktienComponent() {

    const [modalOpen, setModalOpen] = useState(false);

    const aktienContext = useContext(AktienContext)

    const openAktienAuswahl = () => {
        setModalOpen(true)
    };

    const closeAktienAuswahl = () => {
        setModalOpen(false);
    };

    return (
        <Box display="flex" justifyContent="center" mb={3} mt={3}>
            <Button variant="outlined" onClick={openAktienAuswahl}>
                Aktien hinzufügen
            </Button>
            <AktienAuswahlModal onSubmit={aktienContext.auswahlBestaetigen}
                                open={modalOpen}
                                onClose={closeAktienAuswahl}/>
        </Box>
    );
}

export default AktienComponent;