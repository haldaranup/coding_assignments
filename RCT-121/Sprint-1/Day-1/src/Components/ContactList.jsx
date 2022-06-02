import { useState } from "react";
import "./list.scss";
const ContactList = ({name, email, phone, img}) => {
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active)
    
  }
  return (
    <>
          <div className="listContainer">
            <div className="items" onClick={handleClick}>
              <img src={img} alt="img" />
              <div>
                <h2>{name}</h2>
                <p>{email}</p>
                {active && <p>{phone}</p>}
              </div>
            </div>
          </div>
        
      
    </>
  );
};

export default ContactList;
