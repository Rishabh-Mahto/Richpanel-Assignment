import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { AgentScreen } from "./pages/AgentScreen";
import { Connect } from "./pages/Connect";
import { Disconnect } from "./pages/Disconnect";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/disconnect" element={<Disconnect />} />
          <Route path="/agentscreen" element={<AgentScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
