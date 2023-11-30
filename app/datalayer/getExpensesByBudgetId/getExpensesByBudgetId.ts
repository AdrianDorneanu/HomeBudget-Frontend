export async function getExpensesByBudgetId(id: string) {
  try {
    const response = await fetch(
      `${process.env.BASE_API_URL}/api/expenses/${id}`
    );

    if (response.ok) {
      const expenses = await response.json();

      return expenses;
    }

    return [];
  } catch (error) {
    console.error(error);

    throw new Error("Something was wrong! - getExpensesByBudgetId.ts");
  }
}
