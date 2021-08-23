import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

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
