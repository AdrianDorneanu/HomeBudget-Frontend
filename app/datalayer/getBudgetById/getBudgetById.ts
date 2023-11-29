import { redirect } from "next/navigation";

export async function getBudgetByid(id: string) {
  try {
    const response = await fetch(
      `${process.env.BASE_API_URL}/api/budget/${id}`
    );

    if(response.ok) {
      const budget = await response.json();

      return budget;
    }

    return undefined;
  } catch (error) {
    console.error(error);

    throw new Error("Something went wrong! - getBudgetById.ts");
  }
}
