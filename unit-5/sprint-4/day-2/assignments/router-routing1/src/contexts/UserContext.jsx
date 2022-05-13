import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    total: 0,
    terminated: 0,
    promoted: 0,
    total_new: 0,
  });

  const [emp, setEmp] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/employee")
      .then((res) => res.json())
      .then((data) => {
        setEmp(data);
        // console.log(emp);
        setUser({ ...user, total: data.length });
      });
  }, []);

  return <UserContext.Provider value={{ user, emp }}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
