import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import HomePage from "./pages/home-page";
import PizzaPage from "./pages/pizza/pizza-page";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizze" element={<PizzaPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
