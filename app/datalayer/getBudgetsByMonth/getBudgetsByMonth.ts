export async function getBudgetsByMonth(month: Date) {
  try {
    const response = await fetch(
      `${process.env.BASE_API_URL}/api/budget/${month?.toISOString()}`
    );

    if (response.ok) {
      const data = await response.json();

      return data;
    }

    return [];
  } catch (error) {
    console.error(error);

    throw new Error("Something went wrong! - getBudgetsByMonth.ts")
  }
}