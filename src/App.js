import NavigationBar from "./administration/navigation/NavigationBar";
import LookupTable from "./administration/look-ups/dashboard/LookupTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < NavigationBar />
      </header>


        <LookupTable />
    </div>
  );
}

export default App;
