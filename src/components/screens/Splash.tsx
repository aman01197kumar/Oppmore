import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/feed"), 4000);
  },[]);
  return (
    <div className="text-center pt-5 fs-5 fw-4">Welcome to the project</div>
  );
}

export default Splash;
