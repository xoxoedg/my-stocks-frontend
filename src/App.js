import NavigationBar from "./admin/NavigationBar";
import MappingInput from "./admin/MappingInput";
import AdminDashbord from "./admin/AdminDashbord";
import SideNavigationBar from "./admin/SideNavigationBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < NavigationBar />
      </header>
      <MappingInput/>
        <AdminDashbord />
        <SideNavigationBar/>
    </div>
  );
}

export default App;
