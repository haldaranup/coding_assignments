import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";




export const Login = () => {

    const { handleAuth }= useContext(AuthContext);

const navigate = useNavigate();


    return (
    <div>
    <input type="text" placeholder="username" />{" "}
    <input type="text" placeholder="password" />
    <button
onClick={() => {
// make network req POST req.in/api/login with email and pass
// token
// change state of isAuth. to true.
handleAuth(true);
// imperative.
navigate(-2 ,{replace:true})
}}>
Submit
</button>

    </div>
    );
    };
    