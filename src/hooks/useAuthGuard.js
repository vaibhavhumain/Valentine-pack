import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuthGuard() {
  const navigate = useNavigate();

  useEffect(() => {
    const allowed = localStorage.getItem("allowed");
    if (!allowed) {
      navigate("/");
    }
  }, [navigate]);
}
