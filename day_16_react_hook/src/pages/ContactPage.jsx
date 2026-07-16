import { NavLink, Outlet } from "react-router";

const ContactPage = () => {
  return (
    <div>
        <h2>Contact Page</h2>
        <NavLink to={"/contact/nested"}>Nested</NavLink>
        <Outlet/>
    </div>
  )
}

export default ContactPage