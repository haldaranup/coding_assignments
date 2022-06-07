import { useEffect, useState } from "react"
import { Card, GridBox } from "./Card"

 

export const Mens = () => {
    const [menData, setMenData] = useState([])
    useEffect(() => {
        getData();
        return function cleanup() { };
    },[])
    
    async function getData() {
        const data = await fetch(`http://localhost:8080/menData`).then((d) => d.json());
        setMenData(data)
    }

  const addToCart = (d ) => {
      console.log(d)
        fetch("http://localhost:8080/cartData", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(d),
        });
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