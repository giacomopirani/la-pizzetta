import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";

const PageLoader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [location]);

  return loading ? (
    <div className="fixed inset-0 z-[9998] bg-white/60 backdrop-blur-md flex items-center justify-center">
      <HashLoader size={60} color="black" />
    </div>
  ) : null;
};

export default PageLoader;
