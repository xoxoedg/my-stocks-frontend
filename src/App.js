import AdministrationPage from "./administration/AdministrationPage";
import AktienPage from "./aktien/AktienPage";
import LandingPage from "./landing/LandingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CssBaseline} from "@mui/material";
import NavigationBar from "./common/navigation/NavigationBar";

function App() {
    return (
        <div className="App">
            <CssBaseline/>
            <BrowserRouter>
                <NavigationBar/>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="aktien" element={<AktienPage/>}/>
                    <Route path="administration" element={<AdministrationPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
