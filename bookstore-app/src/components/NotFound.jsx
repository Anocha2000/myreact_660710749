import React from "react";
import { Link,useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  
  const handleGoHome = () => {
    navigate("/");
  }
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      
    </div>
  );
}
export default NotFound;