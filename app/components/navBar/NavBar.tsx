import { AiFillHome } from "react-icons/ai";
import { NavBarList } from "./navBarList";

import "./navBar.css";

export function NavBar() {
  const routes = [
    {
      name: "Dashboard",
      url: "/",
    },
    {
      name: "Budgets",
      url: "/budgets",
    },
    {
      name: "Expenses",
      url: "/expenses",
    },
  ];

  return (
    <nav>
      <div className="navbar-title-wrapper">
        <AiFillHome className="home-icon" />
        <h1 data-testid="navbar-title" className="navbar-title">HomeBudget</h1>
      </div>

      <NavBarList routes={routes} />
    </nav>
  );
}
