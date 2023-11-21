import { render } from "@testing-library/react";
import { BudgetsList } from "./BudgetsList";
import { BudgetProps } from "./budget";

describe("BudgetsList", () => {
  let budgets: BudgetProps[];

  beforeAll(() => {
    budgets = [];
  });
  it("should render successfully", () => {
    const { baseElement } = render(<BudgetsList budgets={budgets} />);

    expect(baseElement).toBeTruthy();
  });
  it("should display the no budgets message when there are no budgets available", () => {
    const { getByTestId } = render(<BudgetsList budgets={budgets} />);

    const noBudgetsMessage = getByTestId("no-budgets-created-text").textContent;

    expect(noBudgetsMessage).toBe("No budgets created yet!");
  });
});
