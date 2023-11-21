import { BudgetsList } from "../components";
import { getAllBudgets } from "../datalayer";

export default async function BudgetsPage() {
  const budgets = await getAllBudgets();

  return <BudgetsList budgets={budgets} />;
}
