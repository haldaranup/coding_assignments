import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  
const navigate = useNavigate()

  return (
    <div className="nav">
      <div>Product Dashboard</div>
      <div>
        {/* Link the button to the /add route, when the user clicks on the button */}
        <button data-cy="add-product-navbar-button" onClick={() => navigate("/add")}>Add Product</button>
      </div>
    </div>
  );
};

export default Navbar;
