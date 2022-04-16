import NavigationBar from "./administration/navigation/NavigationBar";
import LookupTable from "./administration/look-ups/dashboard/LookupTable";
import {CssBaseline} from "@mui/material";

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <CssBaseline />
        <LookupTable/>
    </div>
  );
}

export default App;
