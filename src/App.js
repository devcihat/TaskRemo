import React from "react";

import Card from "./components/Card";
import { DataProvider } from "./components/DataProvider";

function App() {
  return (
    <DataProvider>
      <div style={{ backgroundColor: "#111111" }}>
        <Card />
      </div>
    </DataProvider>
  );
}

export default App;
