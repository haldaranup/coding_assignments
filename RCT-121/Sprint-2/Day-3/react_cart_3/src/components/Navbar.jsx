



import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

export const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Mens Products",
      to: "/mens",
    },
    {
      title: "Womens Products",
      to: "/womens",
    },
    {
      title: "Contact Us",
      to: "/contact-us",
    },
    {
      title: "About Us",
      to: "/about-us",
    },
    {
      title: "FAQ",
      to: "/faq",
    },
    {
      title: "SignUp",
      to: "/signup",
    },
    {
      title: <BsCart3/>,
      to: "/shoppingcart",
    },
  ];
  return (
    <>
      <div style={{ backgroundColor: "#fbd9f5", padding: "5px", height:"40px",lineHeight:"35px" }}>
        {navItems.map((e, i) => (
          <Link
            key={i}
            to={e.to}
            style={{
              margin: "15px",
             
              textDecoration: "none",
              fontWeight: "bold",
              color: "Black",
            }}
          >
            {e.title}
          </Link>
        ))}
        {/* <Link to="/cart"> <BsCart3/> </Link> */}
        {/* <div>
          <Link to="/login">Login</Link>
          <Link to="/cart">Cart: {0}</Link>
        </div> */}
      </div>
    </>
  );
};