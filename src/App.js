import "./App.css";
import DataProvider from "./components/context/DataProvider";
import Home from "./components/Home";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
