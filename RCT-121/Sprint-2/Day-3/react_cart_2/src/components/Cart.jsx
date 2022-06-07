import { useEffect, useState } from "react";
import { Card, GridBox } from "./Card";

export const Cart = () => {
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    getData();
    return function cleanup() {};
  }, []);

  async function getData() {
    const data = await fetch(`http://localhost:8080/cartData`).then((d) =>
      d.json()
    );
    setCartData(data);
    console.log(data);
  }

  const addToCart = (d) => {
    console.log(d);
    fetch("http://localhost:8080/cartData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(d),
    });
  };

  return (
    <div>
      <GridBox>
        {cartData.map((e, i) => (
          <Card key={i}>
            <div>
              <img src={e.image_url} alt={e.name} />
            </div>
            <div>
              <p>{e.name}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                  margin: "auto auto",
                }}
              >
                <div>{e.price}</div>
                <div>
                  <span style={{ textDecoration: "line-through" }}>
                    {e.strikedoffprice}
                  </span>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    addToCart(e);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </Card>
        ))}
      </GridBox>
    </div>
  );
};