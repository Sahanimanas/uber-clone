import { useEffect } from "react";
import { useNavigate } from "react-router";

const Userprotected = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    useEffect(() => {
      navigate("/user-login");
    }, [token]);

    return;
  }

  return <>{children}</>;
};

export default Userprotected;
