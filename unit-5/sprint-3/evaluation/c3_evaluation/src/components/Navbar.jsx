import { Link } from "react-router-dom";



export const Navbar = () => {
    const nav =[
    { title: "Home", to: "/" },
    { title: "Admin", to: "/admin" },
    { title: "Users", to: "/users" },
    { title: "Login", to: "/login" }
    ]
    return (
    <div>
    {nav.map( (e, i) => (
    <Link key={i} to={e.to}>
    {e.title}
    </Link>
    )) }
    </div>
    );
    };
    