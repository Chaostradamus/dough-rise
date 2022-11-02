import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
