import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/headers";
import HomePage from "./Screen/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
