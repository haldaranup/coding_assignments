import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export const EmployeeDetails = () => {
  const { emp } = useContext(UserContext);
  const { id } = useParams();
  const [User, setUser] = useState({});
  useEffect(() => {
    for (let key in emp) {
      if (emp[key].employee_id === id) {
        setUser(emp[key]);
      }
    }
  }, []);

  return (
    <div className="user_details">
      <img className="user_image" />
      <h4 className="user_name"></h4>
      <span className="user_salary">$</span>
      <span className="tasks">
        <li className="task"></li>
      </span>
      Status: <b className="status"></b>
      Title: <b className="title"></b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
