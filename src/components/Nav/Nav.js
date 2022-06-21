import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    <ul className={classes.Nav}>
      <NavItem url="/">Home</NavItem>

      <NavItem url="/contacts">Contacts</NavItem>
      <NavItem url="/payment">Payment</NavItem>
    </ul>
  );
}

export default Nav;
