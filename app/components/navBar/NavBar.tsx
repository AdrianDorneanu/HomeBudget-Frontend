import { AiFillHome } from "react-icons/ai";
import { NavBarList } from "./navBarList";

import "./navBar.css";

export function NavBar() {
  const routes = [
    {
      id: "navbar-link-1",
      name: "Dashboard",
      url: "/",
    },
    {
      id: "navbar-link-2",
      name: "Budgets",
      url: "/budgets",
    },
    {
      id: "navbar-link-3",
      name: "Expenses",
      url: "/expenses",
    },
  ];

  return (
    <nav>
      <div className="navbar-title-wrapper">
        <AiFillHome className="home-icon" />
        <h1 className="navbar-title">HomeBudget</h1>
      </div>

      <NavBarList routes={routes} />
    </nav>
  );
}
