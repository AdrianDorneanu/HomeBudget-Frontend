import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

import "./navBarList.css";

interface NavBarRoute {
  id: string;
  name: string;
  url: string;
}
interface NavBarListProps {
  routes: NavBarRoute[];
}
export function NavBarList({ routes }: NavBarListProps) {
  return (
    <ul>
      {routes.map(({ id, name, url }: NavBarRoute) => (
        <Link data-testid={id} className="navbar-link" key={id} href={url}>
          <h4 data-testid={`navbar-link-title-${name.toLowerCase()}`}>
            {name}
          </h4>
          <AiOutlineArrowLeft />
        </Link>
      ))}
    </ul>
  );
}
