import type { ReactNode } from "react";
import { useRouteLoading } from "../hook/use-route-loading";
import PageLoader from "./loaders/page-loader";

interface PageTransitionWrapperProps {
  children: ReactNode;
}

const PageTransitionWrapper = ({ children }: PageTransitionWrapperProps) => {
  const isPageLoading = useRouteLoading();

  if (isPageLoading) {
    return <PageLoader />;
  }

  return children;
};

export default PageTransitionWrapper;
