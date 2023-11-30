export async function deleteExpenseById(id: string) {
  try {
    const options = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Id: id,
      }),
    };

    const response = await fetch(
      `${process.env.BASE_API_URL}/api/expense/${id}`,
      options
    );

    if (response.ok) {
      const deletedExpense = await response.json();

      return deletedExpense;
    }

    return null;
  } catch (error) {
    console.error(error);

    throw new Error("Something went wrong! - deleteExpenseById.ts");
  }
}
