import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface RedirectProps {
  to: string;
}

/**
 * Generic redirect component that immediately redirects to the target path
 * Uses replace: true to prevent back button issues
 */
const Redirect = ({ to }: RedirectProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace: true });
  }, [navigate, to]);

  return null;
};

export default Redirect;
