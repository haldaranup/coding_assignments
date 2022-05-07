import React, {useState,useEffect} from 'react'
import axios from 'axios';
import "./RestaurantDetails.css";

export default function RestaurantDetails() {
  const [list, setList] = useState([]);

  function getData(){
      axios.get("http://localhost:3001/restaurant").then((response)=>{
        //   console.log(response);
          setList([...response.data])
      })
  }
  useEffect( () => {
     getData();
  }, [])
  return (
    <div>
        <h1>Restaurant Details</h1>
        <div className="items">
        {list.map((el)=>{
            return <div className="dish" key= {el.id}>
                <div >
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/113777-0b21d44.jpg?quality=90&resize=400,363" alt="gdh" width="150px" height="150px"/>
                </div>
                <div className="dishDetail">
                    <span><h3>{el.name}</h3>
                    <button>{el.rev}</button>
                    </span>
                    <p>{el.desc}</p>
                    <p>cost ₹{el.cost}</p>
                    {el.iscard && el.isupi === 'true' ? <p>Accept online payment mode</p> : el.iscash && el.iscard || el.isupi === 'true' ? <p>Accept all modes of payment</p> : <p>Accept cash only</p>}
                </div>
            </div>
        })}
        </div>
    </div>
  )
}
