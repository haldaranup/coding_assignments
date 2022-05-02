import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../Redux/actions";

export const Logout = () => {
   const navigate = useNavigate();
  const { isAuth } = useSelector((store) => store);
  const dispatch = useDispatch();
  dispatch(userAuth(false));
  navigate("/");
  return <>
    
  </>;
};
