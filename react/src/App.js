import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Profit from "./components/profit/Profit";
import Sales from "./components/sales/Sales";
import Margin from "./components/margin/Margin";
import Units from "./components/units/Units";
import Blended from "./components/blended/Blended";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/profit" element={<Profit />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/margin" element={<Margin />} />
            <Route path="/units" element={<Units />} />
            <Route path="/blended" element={<Blended />} />
          </Route>

          <Route path="list">
            <Route index element={<List />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
