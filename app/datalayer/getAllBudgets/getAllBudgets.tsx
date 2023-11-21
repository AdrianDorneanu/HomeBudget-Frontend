import { BudgetAPIOutput } from "./typings";

export async function getAllBudgets(): Promise<BudgetAPIOutput[]> {
  try {
    const response = await fetch(`${process.env.BASE_API_URL}/api/budget`);
    const budgets = await response.json();

    return budgets;
  } catch (err) {
    console.error(err);

    throw new Error("Something went wrong! * getAllBudgets");
  }
}
