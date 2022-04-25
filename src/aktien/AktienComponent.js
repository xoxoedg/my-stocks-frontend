import React, {useContext, useState} from "react";
import AktienContext from "../aktien/data-store/AktienContext";
import {Box} from "@mui/material";
import Button from "@mui/material/Button";
import AktienAuswahlModal from "./aktien-modal/AktienAuswahlModal";


function AktienComponent() {

    const [modalOpen, setModalOpen] = useState(false);
    const [aktienAuswahl, setAktienAuswahl] = useState({})

    const aktienContext = useContext(AktienContext)

    const openAktienAuswahl = () => {
        aktienContext.onPrefill().then(res => {
            console.log(res.data.toString())
            setAktienAuswahl(res.data)
            setModalOpen(true)
        })
    };

    const closeAktienAuswahl = () => {
        setModalOpen(false);
    };

    return (
        <Box display="flex" justifyContent="center" mb={3} mt={3}>
            <Button variant="outlined" onClick={openAktienAuswahl}>
                Open form dialog
            </Button>
            <AktienAuswahlModal onSubmit={aktienContext.onSelect}
                                open={modalOpen}
                                onClose={closeAktienAuswahl}
                                aktienAuswahl={aktienAuswahl}/>
        </Box>
    );
}

export default AktienComponent;