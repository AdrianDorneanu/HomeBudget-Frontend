import { render } from "@testing-library/react";
import { Title } from "./Title";

describe("Title", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Title title="Budgets" />);

    expect(baseElement).toBeTruthy;
  });

  it("should have the correct title", () => {
    const { getByTestId } = render(<Title title="Budgets" />);

    const title = getByTestId("page-title").textContent;

    expect(title).toBe("Budgets");
  });
});
