import { render } from "@testing-library/react";
import { Budget } from "./Budget";

describe("Budget", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Budget />);

    expect(baseElement).toBeTruthy();
  });
});
