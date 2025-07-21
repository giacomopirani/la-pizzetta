import { createContext, useContext, type ReactNode } from "react";

interface AppLoadingContextType {
  hasAppLoaded: boolean;
}

const AppLoadingContext = createContext<AppLoadingContextType | undefined>(
  undefined
);

export const useAppLoading = (): AppLoadingContextType => {
  const context = useContext(AppLoadingContext);
  if (!context) {
    throw new Error("useAppLoading must be used within AppLoadingProvider");
  }
  return context;
};

interface AppLoadingProviderProps {
  children: ReactNode;
  hasAppLoaded: boolean;
}

export const AppLoadingProvider = ({
  children,
  hasAppLoaded,
}: AppLoadingProviderProps) => {
  return (
    <AppLoadingContext.Provider value={{ hasAppLoaded }}>
      {children}
    </AppLoadingContext.Provider>
  );
};
