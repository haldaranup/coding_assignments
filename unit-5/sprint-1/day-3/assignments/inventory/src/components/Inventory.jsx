import { useState } from "react";

export const Inventory = () => {
  const [books, setBooks] = useState(12);
  const [pens, setPens] = useState(2);
  const [notebooks, setNotebooks] = useState(22);
 const [total,setTotal]=useState(books+pens+notebooks);

  function changeBook(val)
  {
      
      if(val===1)
      {
        
          setBooks(books+1);
          setTotal(total+1);
      }
      if(val===-1)
      {
        if(books<2)
        {
            return;
        }
          setBooks(books-1);
          setTotal(total-1);
      }
  }

  function handleBook(val)
  {
    if(total<1 )
    {
        return;
    }
      if(val===1)
      {
          setNotebooks(notebooks+1);
          setTotal(total+1);
      }
      if(val===-1)
      {
        if(notebooks<2)
        {
            return;
        }
          setNotebooks(notebooks-1);
          setTotal(total-1);
      }
  }

  function handlePen(val)
  {
    if(total<1 )
    {
        return;
    }
      if(val===1)
      {
          setPens(pens+1);
          setTotal(total+1);
      }
      if(val===-1)
      {
        if(pens<2)
        {
            return;
        }
          setPens(pens-1);
          setTotal(total-1);
      }
  }

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>{changeBook(1)}}>+</button>
        <button className="circlularButton" onClick={()=>{changeBook(-1)}}>-</button>
        <span>{books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>{handleBook(1)}}>+</button>
        <button className="circlularButton" onClick={()=>{handleBook(-1)}}>-</button>
        <span>{notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>{handlePen(1)}}>+</button>
        <button className="circlularButton" onClick={()=>{handlePen(-1)}}>-</button>
        <span>{pens}</span>
      </div>
      
            {/*calculate total and show it*/}
          Total items:- {total}
    </div>
  );
};