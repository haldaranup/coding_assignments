
import { Link } from "react-router-dom";
import { BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";


export const Footer = () => {
  const pages = [
    {
      id: 1,
      title: "Mens Products",
      to: "/mens",
    },
    {
      id: 2,
      title: "Womens Products",
      to: "/womens",
    },
    {
      id: 3,
      title: "Cart",
      to: "/cart",
    },
  ];
  const links = [
    {
      id: 1,
      title: "Contact Us",
      to: "/contact-us",
    },
    {
      id: 2,
      title: "About Us",
      to: "/about-us",
    },
    {
      id: 3,
      title: "FAQ",
      to: "/faq",
    },
  ];
  const social = [
    {
      id: 1,
      title: <BsYoutube />,
      to: "https://youtu.be/OSHtduartHo",
    },
    {
      id: 2,
      title: <BsTwitter />,
      to: "",
    },
    {
      id: 3,
      title: <BsInstagram />,
      to: "",
    },
  ];
  return (
    <>
      <footer className="Footer">
        <div>
          <h3>Products</h3>
          {pages.map((e) => (
            <p className="footerText" key={e.id}>
              <Link  to={e.to} className="footerLink">
                {e.title}
              </Link>
            </p>
          ))}
        </div>
        <div>
          <h3>Useful Links</h3>
          {links.map((e) => (
            <p className="footerText" key={e.id}>
              <Link to={e.to} className="footerLink">
                {e.title}
              </Link>
            </p>
          ))}
        </div>
        <div>
          <h3>Keep in touch</h3>
          {social.map((e) => (
            <a key={e.id} href={e.to} target="_blank" className="footerText">
              {e.title}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
};