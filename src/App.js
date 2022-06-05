import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/headers";
import HomePage from "./Screen/HomePage";
import AddSong from "./Screen/AddSong";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addsong" element={<AddSong />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
