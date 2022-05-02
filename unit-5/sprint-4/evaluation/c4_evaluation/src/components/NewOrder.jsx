import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const NewOrder = () => {
   // Get data of only this user. store it in redux
   // GET /orders?owner_name=john will give you all order of user john
   //  on submit click create a new order, new order has status `Not Accepted`

   const [data, setData] = useState([]);
   const store = useSelector((store) => store);

   const getData = async () => {
      let fetched = await fetch(
         `http://localhost:8080/orders?owner_name=${store.username}`
      );
      fetched = await fetched.json();
      setData(fetched);
   };
   console.log(data);

   useEffect(() => {
      getData();
   }, []);

   const handleFinished = () => {
      let filtered = data.filter((e) => {
         return e.status === "Done";
      });

      setData(filtered);
   };

   return (
      <div>
         <div className="form">
            <input
               className="new-problem"
               type="text"
               name="problem"
               placeholder="Enter problem"
            />
            {/* This input is readonly, it's coming from redux */}
            <input
               className="owner-name"
               type="text"
               name="owner_name"
               placeholder="yourname"
               readOnly
            />
            <input
               className="brand"
               type="text"
               name="brand"
               placeholder="Enter brand name"
            />
            {/* Create new problem, show it in below form immediately */}
            <button className="submit">submit</button>
         </div>

         <div className="pastOrders">
            {/* this button filters the data below. */}
            {/* it's just a toggle of redux state something like `showUnfinished`  */}
            <button onClick={handleFinished} className="filter">
               {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
               Unfinished
            </button>

            {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
            {data.map((e) => {
               return (
                  <div className="past-orders">
                     <span className="id">{e.id}</span>.{" "}
                     <span className="problem">{e.problem}</span>{" "}
                     <span className="cost">
                        {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
                        {e.status !== "Not Accepted" ? "$420" : null}
                     </span>
                     <p className="status">Status: {e.status}</p>
                     <hr />
                  </div>
               );
            })}
         </div>
      </div>
   );
};
