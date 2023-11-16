import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

import "./navBarList.css";

export interface NavBarRoute {
  name: string;
  url: string;
}
interface NavBarListProps {
  routes: NavBarRoute[];
}
export function NavBarList({ routes }: NavBarListProps) {
  return (
    <ul>
      {routes.map(({ name, url }: NavBarRoute, idx) => (
        <Link
          data-testid="navbar-link"
          className="navbar-link"
          key={name}
          href={url}
        >
          <h4 data-testid={`navbar-link-title-${name.toLowerCase()}`}>
            {name}
          </h4>
          <AiOutlineArrowLeft />
        </Link>
      ))}
    </ul>
  );
}
