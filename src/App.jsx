import "./App.css";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import NoMatch from "./utility/NoMatch";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route index element={<Home />} /> */}
                    <Route path="/" element={<Home />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
