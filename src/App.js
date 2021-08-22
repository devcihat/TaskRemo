import Card from "./components/Card";
import { DataProvider } from "./components/DataProvider";

const App = () => {
  return (
    <DataProvider>
      <div style={{ backgroundColor: "#111111" }} className="">
        <Card />
      </div>
    </DataProvider>
  );
};

export default App;
