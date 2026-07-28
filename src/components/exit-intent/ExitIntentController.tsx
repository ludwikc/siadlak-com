import { useLocation } from "react-router-dom";

export default function ExitIntentController() {
  const { pathname } = useLocation();
  // Exit intent popup is temporarily disabled.
  void pathname;
  return null;
}

