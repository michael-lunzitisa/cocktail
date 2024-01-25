import "./App.css";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import NoMatch from "./utility/NoMatch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                <Route element={<Layout />} />
                    <Route index element={<Home />} />

                    <Route path="/home" element={<Home />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NoMatch />} />

                </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
