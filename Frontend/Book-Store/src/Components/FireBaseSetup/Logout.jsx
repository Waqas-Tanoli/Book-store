import { useContext } from "react";
import AuthProvider from "./AuthProvider";
import { AuthContext } from "./AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useContext(AuthContext); // Using AuthContext here
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogOut = () => {
    logout()
      .then(() => {
        alert("Logged Out Successfully!!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button
        className="bg-red-700 px-8 py-2 text-white rounded"
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
};
export default Logout;
