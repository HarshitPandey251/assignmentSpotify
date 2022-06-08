import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/headers";
import HomePage from "./Screen/HomePage";
import AddSong from "./Screen/AddSong";
import AllArtistScreen from "./Screen/AllArtistScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addsong" element={<AddSong />} />
        <Route path="/allartist" element={<AllArtistScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
