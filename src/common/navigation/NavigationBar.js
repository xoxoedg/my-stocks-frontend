import {AppBar, Toolbar, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import {styled} from '@mui/system';
import {Link} from "react-router-dom";


const StyledMyComponent = styled(Typography)({
    marginLeft: 30,
});

function NavigationBar() {
    return (
        <AppBar position="relative">
            <Toolbar variant={'regular'}>
                <HomeIcon/>
                <StyledMyComponent variant="h6">
                    <Link to="/aktien">
                        Aktien
                    </Link>
                </StyledMyComponent>
                <StyledMyComponent variant="h6">
                    TBD
                </StyledMyComponent>
                <StyledMyComponent variant="h6">
                    <Link to="/administration">
                        Administration
                    </Link>
                </StyledMyComponent>
            </Toolbar>
        </AppBar>
    )
}

export default NavigationBar;

