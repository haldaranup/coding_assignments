import { useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export const EmployeeList = () => {
  const { emp } = useContext(UserContext);
  const navigate = useNavigate();
  const gotodetail = (data) => {
    const path = "/employees/" + data.employee_id;
    console.log(path);
    navigate(path);
  };

  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}

      {emp.map((e) => {
        return (
          <div className="employee_card" key={e.id} onClick={() => gotodetail(e)}>
            <img className="employee_image" src={e.image} />
            <span className="employee_name">{e.employee_name}</span>
            <span className="employee_title">{e.title}</span>
          </div>
        );
      })}
    </div>
  );
};
