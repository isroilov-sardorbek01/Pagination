import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import First from "./pages/First";
import Second from "./pages/Second";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route index element={<First></First>}></Route>
                <Route path="/second" element={<Second></Second>}></Route>
            </Routes>
        </div>
    );
}

export default App;
