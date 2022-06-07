import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext";
import { Card, GridBox } from "./Card"
import { useNavigate } from "react-router-dom";
 

export const Mens = () => {
    const [menData, setMenData] = useState([]);

  const {isAuth,toggleAuth} =useContext(AuthContext)
const navigate=useNavigate()
    useEffect(() => {
        getData();
        return function cleanup() { };
    },[])
    
    async function getData() {
        const data = await fetch(`http://localhost:8080/menData`).then((d) => d.json());
        setMenData(data)
    }

  const addToCart = (d ) => {
    if(!isAuth){
   navigate("/signup")
    }
    else{

      console.log(d)
        fetch("http://localhost:8080/cartData", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(d),
        });
        alert("Item added to cart successfully")
    }
    }

    return (

      <div>
        <GridBox>
          {menData.map((e, i) => (
            <Card key={i}>
              <div>
                <img src={e.image_url} alt={e.name} />
              </div>
              <div>
                <p>{e.name}</p>
                <div>
                  <div>{e.price}</div>
                  <div> 
                    <span style={{textDecoration: "line-through"}}>{e.strikedoffprice}</span>
                  </div>
                </div>
                <div>
                  <button onClick={() => { addToCart(e) }}>Add to Cart</button>
                </div>
              </div>
            </Card>
          ))}
        </GridBox>
      </div>
    );
      
}