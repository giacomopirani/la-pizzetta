import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/footer";
import AppLoader from "./components/loaders/app-loader";
import Navbar from "./components/navbar";
import PageTransitionWrapper from "./components/page-transition-wrapper";

import { AppLoadingProvider } from "./context/app-loading-context";
import CascioniPage from "./pages/cascioni/cascioni-page";
import HomePage from "./pages/home-page";
import PaniniPage from "./pages/panini/panini-page";
import PiadinePage from "./pages/piadine/piadine-page";
import PizzaPage from "./pages/pizza/pizza-page";

function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsAppLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isAppLoading) return <AppLoader />;

  return (
    <AppLoadingProvider hasAppLoaded={!isAppLoading}>
      <Router>
        <Navbar />

        <PageTransitionWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pizze" element={<PizzaPage />} />
            <Route path="/panini" element={<PaniniPage />} />
            <Route path="/cascioni" element={<CascioniPage />} />
            <Route path="/piadine" element={<PiadinePage />} />
          </Routes>
        </PageTransitionWrapper>

        <Footer />
      </Router>
    </AppLoadingProvider>
  );
}

export default App;
