import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";
import Header from "./Header";
import CreateAds from "./CreateAds";
import MediaAds from "./MediaAds";
import TextAds from "./TextAds";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/createAs" element={<CreateAds />} />
        <Route path="/mediaads" element={<MediaAds />} />
        <Route path="/textads" element={<TextAds />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
