import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from './Login';

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