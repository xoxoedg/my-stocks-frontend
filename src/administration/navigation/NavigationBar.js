import {AppBar, Container, Tab, Toolbar, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { styled } from '@mui/system';


const StyledMyComponent = styled(Typography)( {
    marginLeft: 30,
});


function NavigationBar() {
    return (
        <AppBar position="relative">
            <Toolbar variant={'regular'}>
                <HomeIcon/>

                <StyledMyComponent variant="h6" >
                    Photo Album
                </StyledMyComponent>

                <StyledMyComponent variant="h6">
                    Photo Album
                </StyledMyComponent>

                <StyledMyComponent variant="h6">
                    Photo Album
                </StyledMyComponent>

            </Toolbar>
        </AppBar>
    )

}

export default NavigationBar;

