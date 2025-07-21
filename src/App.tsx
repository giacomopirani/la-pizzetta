import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/scroll-top";
import HomePage from "./pages/home-page";
import PizzaPage from "./pages/pizza/pizza-page";

import AppLoader from "./components/loaders/app-loader";
import PageLoader from "./components/loaders/page-loader";

function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsAppLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isAppLoading) return <AppLoader />;

  return (
    <Router>
      <ScrollToTop />
      <PageLoader />
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
