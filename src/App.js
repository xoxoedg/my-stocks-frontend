import NavigationBar from "./administration/navigation/NavigationBar";
import {CssBaseline} from "@mui/material";
import AdministrationPage from "./administration/AdministrationPage";

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <CssBaseline />
        <AdministrationPage/>
    </div>
  );
}

export default App;
