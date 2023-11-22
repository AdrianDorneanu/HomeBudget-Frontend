import { render } from "@testing-library/react";
import { BudgetCard } from "./BudgetCard";

describe("Budget", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<BudgetCard />);

    expect(baseElement).toBeTruthy();
  });
});
