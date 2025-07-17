import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import HomePage from "./pages/home-page";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
