import React, {useContext, useState} from "react";
import AktienContext from "../aktien/data-store/AktienContext";
import {Box, ImageList, ImageListItem} from "@mui/material";
import Button from "@mui/material/Button";
import AktienAuswahlModal from "./aktien-modal/AktienAuswahlModal";


function AktienComponent() {

    const [modalOpen, setModalOpen] = useState(false);

    const dummyList = ['a', 'b', 'c', 'd', 'e', 'f']

    const aktienContext = useContext(AktienContext)

    const openAktienAuswahl = () => {
        setModalOpen(true)
    };

    const closeAktienAuswahl = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <Box display="flex" justifyContent="center" mb={3} mt={3}>
                <div>
                    <Button variant="outlined" onClick={openAktienAuswahl}>
                        Aktien hinzufügen
                    </Button>
                    <AktienAuswahlModal onSubmit={aktienContext.auswahlBestaetigen}
                                        open={modalOpen}
                                        onClose={closeAktienAuswahl}/>
                </div>
            </Box>
            <Box display="flex" justifyContent="center" mb={3} mt={3}>
                <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
                    {dummyList.map((aktie) => (
                        <ImageListItem key={aktie}>
                            <Button>{aktie}</Button>
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </div>
    );
}

export default AktienComponent;