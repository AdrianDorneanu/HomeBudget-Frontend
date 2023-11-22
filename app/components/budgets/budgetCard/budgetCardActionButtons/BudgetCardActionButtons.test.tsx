import { render } from "@testing-library/react";
import { BudgetCardActionButtons } from "./BudgetCardActionButtons";

describe("BudgetCardActionButtons", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<BudgetCardActionButtons id="2" />);

    expect(baseElement).toBeTruthy();
  });
});
