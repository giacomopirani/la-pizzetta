import { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import BottomNav from "./components/bottom-nav";
import Footer from "./components/footer";
import AppLoader from "./components/loaders/app-loader";
import Navbar from "./components/navbar";
import PageTransitionWrapper from "./components/page-transition-wrapper";

import MapSection from "./components/map-section";
import { AppLoadingProvider } from "./context/app-loading-context";
import CascioniPage from "./pages/cascioni/cascioni-page";
import FrittiPage from "./pages/fritti/fritti-page";
import HomePage from "./pages/home-page";
import PaniniPage from "./pages/panini/panini-page";
import PiadinePage from "./pages/piadine/piadine-page";
import PizzaPage from "./pages/pizza/pizza-page";

function AppContent() {
  const location = useLocation();

  // Lista delle pagine che devono mostrare la BottomNav
  const showBottomNavPaths = [
    "/pizze",
    "/panini",
    "/cascioni",
    "/piadine",
    "/fritti",
  ];
  const showBottomNav = showBottomNavPaths.includes(location.pathname);

  return (
    <>
      <Navbar />

      <PageTransitionWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pizze" element={<PizzaPage />} />
          <Route path="/panini" element={<PaniniPage />} />
          <Route path="/cascioni" element={<CascioniPage />} />
          <Route path="/piadine" element={<PiadinePage />} />
          <Route path="/fritti" element={<FrittiPage />} />
        </Routes>
      </PageTransitionWrapper>

      {showBottomNav && <BottomNav />}

      <MapSection />
      <Footer />
    </>
  );
}

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
        <AppContent />
      </Router>
    </AppLoadingProvider>
  );
}

export default App;
