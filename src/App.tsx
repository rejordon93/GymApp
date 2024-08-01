import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext"; // Import the provider
import { NavBar } from "./components/NavBar";
import { LandingPage } from "./components/LandingPage";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Router>
      <AppProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
