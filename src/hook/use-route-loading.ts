import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppLoading } from "../context/app-loading-context";

export const useRouteLoading = (delay: number = 800): boolean => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const location = useLocation();
  const { hasAppLoaded } = useAppLoading();
  const previousLocation = useRef<string>(location.pathname);

  useEffect(() => {
    // Non mostrare PageLoader se l'app non è ancora stata caricata completamente
    if (!hasAppLoaded) {
      return;
    }

    // Non mostrare PageLoader se è la stessa route
    if (previousLocation.current === location.pathname) {
      return;
    }

    // Scroll immediato a inizio pagina PRIMA di mostrare il loader
    window.scrollTo(0, 0);

    // Aggiorna la route precedente
    previousLocation.current = location.pathname;

    // Mostra PageLoader solo per navigazioni reali
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
      // Secondo scroll di sicurezza quando il loader finisce
      window.scrollTo(0, 0);
    }, delay);

    return () => clearTimeout(timer);
  }, [location.pathname, delay, hasAppLoaded]);

  return isLoading;
};
