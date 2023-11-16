import { render } from "@testing-library/react";
import { NavBar } from "./NavBar";

describe("NavBar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<NavBar />);

    expect(baseElement).toBeTruthy();
  });

  it("should have the right logo", () => {
    const { getByTestId } = render(<NavBar />);

    const title = getByTestId("navbar-title").textContent;

    expect(title).toBe("HomeBudget");
  });
});
