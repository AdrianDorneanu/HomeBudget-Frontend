import { render } from "@testing-library/react";
import { NavBarList, NavBarRoute } from "./NavBarList";

describe("NavBarList", () => {
  let routes: NavBarRoute[];

  beforeAll(() => {
    routes = [
      {
        name: "Budgets",
        url: "/budgets",
      },
      {
        name: "Expenses",
        url: "/expenses",
      },
    ];
  });

  it("should render successfully", () => {
    const { baseElement } = render(<NavBarList routes={routes} />);

    expect(baseElement).toBeTruthy();
  });

  it("should have 2 navigation link", () => {
    const { getAllByTestId } = render(<NavBarList routes={routes} />);

    const navigationLinks = getAllByTestId("navbar-link");

    expect(navigationLinks).toHaveLength(2);
  });

  it("should have the right url name", () => {
    const { getByTestId } = render(<NavBarList routes={routes} />);

    const name = getByTestId("navbar-link-title-budgets").textContent;

    expect(name).toEqual("Budgets");
  });

  it("should have the right links", () => {
    const { getAllByRole } = render(<NavBarList routes={routes} />);

    const links = getAllByRole("link");

    links.forEach((link: HTMLElement, idx: number) => {
      expect(link.getAttribute("href")).toBe(routes[idx].url);
    });
  });
});
