import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProSidebarProvider } from "react-pro-sidebar";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Dashboard } from "./Pages/Dashboard";

function App() {
  return (
    <div>
      <ProSidebarProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </ProSidebarProvider>
    </div>
  );
}

export default App;
