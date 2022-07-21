import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

const ReqAuth = ({ children }) => {
  let location = useLocation();

  let isAuth = useSelector((state) => state.authReducer.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
export default ReqAuth;
