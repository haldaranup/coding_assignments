import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

//Create the HOC for protected Routes
const ReqAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  console.log(isAuth)
  const location = useLocation();
//   console.log(location);
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ReqAuth;
