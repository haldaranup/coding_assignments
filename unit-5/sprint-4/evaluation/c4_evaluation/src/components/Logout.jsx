import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../Redux/Auth/actions";

export const Logout = () => {
   // Logout component, just log user out and take him to `/` homepage

   // suggestion: if you are storing anyting in redux it's a good idea to
   // empty it before loggin out. eg: order

   const dispatch = useDispatch();
   useSelector((store) => {
      console.log(store);
      return store.username;
   });

   dispatch(login({ login: false }));

   return (
      <>
         <Navigate to={"/"} />
      </>
   );
};
