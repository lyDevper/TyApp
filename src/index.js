import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import classes from "./index.module.css";

import Login from "./Login";
import Home from "./Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route index element={<Login />} />
        <Route path="Home" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);