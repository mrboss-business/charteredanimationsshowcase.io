import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-shaded">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-milk font-heading">404</h1>
        <p className="text-xl text-milk/70 mb-4 font-body">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-block bg-coffee text-milk px-6 py-3 rounded-xl font-semibold hover:bg-coffee/90 transition-colors btn-lift"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
