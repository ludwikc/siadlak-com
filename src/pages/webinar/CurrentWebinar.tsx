import { Navigate } from "react-router-dom";
import { funnels, getNextUpcomingFunnel } from "@/config/funnels";

export default function CurrentWebinar() {
  const next = getNextUpcomingFunnel(funnels, new Date());
  return <Navigate to={next ? `/webinar/${next.slug}` : "/newsletter"} replace />;
}
