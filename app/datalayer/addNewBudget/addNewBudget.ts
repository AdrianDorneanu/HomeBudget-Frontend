import { toast } from "react-toastify";

export async function addNewBudget(budget: any) {
  const { name, totalAmount, month } = budget;

  try {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        totalAmount,
        date: month,
        amountSpent: 0,
        expenses: [],
      }),
    };

    const response = await fetch(
      `${process.env.BASE_API_URL}/api/budget`,
      requestOptions
    );

    if (response.ok) {
      const data = await response.json();

      toast(`Budget with name ${name} added successfully!`, {
        type: "success",
      });

      return data;
    }

    if (response.status === 409) {
      toast(`Budget with name ${name} already exists`, {
        type: "error",
      });

      return undefined;
    }
  } catch (error) {
    console.error(error);

    throw new Error("Something went wrong! - addNewBudget.ts");
  }
}
