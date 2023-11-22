import { render } from "@testing-library/react";
import { BudgetCard, BudgetCardProps } from "./BudgetCard";

describe("Budget", () => {
  let budget: BudgetCardProps;

  beforeAll(() => {
    budget = {
      id: "test123",
      name: "Sport",
      amountSpent: 0,
      totalAmount: 2000,
    };
  });
  it("should render successfully", () => {
    const { baseElement } = render(<BudgetCard {...budget} />);

    expect(baseElement).toBeTruthy();
  });

  it("should have the right budget name", () => {
    const { getByTestId } = render(<BudgetCard {...budget} />);

    const name = getByTestId("budget-name").textContent;

    expect(name).toBe("Sport");
  });

  it("should have the right budget total amount", () => {
    const { getByTestId } = render(<BudgetCard {...budget} />);

    const totalAmount = getByTestId("budget-total-amount").textContent;

    expect(totalAmount).toBe("2000 RON");
  });

  it("should have the right budget amount spent", () => {
    const { getByTestId } = render(<BudgetCard {...budget} />);

    const amountSpent = getByTestId("budget-amount-spent").textContent;

    expect(amountSpent).toBe("0 RON");
  });
});
