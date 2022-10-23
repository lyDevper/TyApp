import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import classes from "./index.module.css";

import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import Chat from "./Chat";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="Home" element={<Home />} />
        <Route path="Register" element={<Register />} />\
        <Route path="Chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
