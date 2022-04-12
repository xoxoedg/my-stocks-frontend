import NavigationBar from "./administration/navigation/NavigationBar";
import LookupDashboard from "./administration/look-ups/dashboard/LookupDashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < NavigationBar />
      </header>


        <LookupDashboard />
    </div>
  );
}

export default App;
