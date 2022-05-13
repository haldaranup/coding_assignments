import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../Redux/Auth/actions";
import { useNavigate } from "react-router-dom";

export const Login = () => {
   const [form, setForm] = useState({
      username: "",
      password: "",
   });

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      axios.get("http://localhost:8080/users").then((data) => {
         data.data.map((item) => {
            // console.log(item);
            if (
               item.username === form.username &&
               item.pass === form.password
            ) {
               // console.log(item);
               dispatch(login({ username: item.username, isLoggedin: true }));
               console.log(item.role);
               if (item.role === "admin") {
                  navigate("/orders");
               } else {
                  navigate("/neworder");
               }
            }
         });
      });
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({
         ...form,
         [name]: value,
      });
      console.log(form);
   };

   return (
      <div>
         <input
            onChange={handleChange}
            className="username"
            type="text"
            name="username"
            placeholder="Enter Username"
         />
         <input
            onChange={handleChange}
            className="password"
            type="password"
            name="password"
            placeholder="Enter password"
         />
         {/* On this button click make network req to find user with same username and password */}
         {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
         <button onClick={handleSubmit} className="submit">
            Login
         </button>
      </div>
   );
};
