


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
      title: "Login",
      to: "/login",
    },
    {
      title: <BsCart3/>,
      to: "/shoppingcart",
    },
  ];
  return (
    <>
      <div>
        {navItems.map((e, i) => (
          <Link
            key={i}
            to={e.to}
            >
            {e.title}
          </Link>
        ))}
      </div>
    </>
  );
};