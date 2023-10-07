import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TitleScreen from "./components/title_screen/TitleScreen";
import Project from "./components/project/Project";
import Warning from "./components/warning/Warning";
import background from "./assets/background.jpg";

function App() {
  return (
    <>
 

      <Router>
        <Routes>
          <Route path="/" element={<TitleScreen />} />
          <Route path="/home" element={<Project />} />
          <Route path="/warning" element={<Warning />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
