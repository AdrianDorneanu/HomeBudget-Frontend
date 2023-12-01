import { Expense } from "../interfaces";

export async function addNewExpense(expense: Expense) {
  try {
    const options: RequestInit = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({
        ...expense
      })
    };

    const response = await fetch(`${process.env.BASE_API_URL}/api/expense`, options);

    if (response.ok) {
      const data = await response.json();

      return data;
    }

    return [];
  } catch (error) {
    console.error(error);

    throw new Error('Something went wrong! - addNewExpense.ts');
  }
}