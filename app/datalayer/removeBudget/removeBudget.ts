import { toast } from "react-toastify";

export async function removeBudget(id: string) {
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
      `${process.env.BASE_API_URL}/api/budget/${id}`,
      options
    );

    if (response.ok) {
      const data = await response.json();

      toast(`Successfully deleted budget ${data.name}`, {
        type: "success",
      });
    }
  } catch (error) {
    console.error(error);

    throw new Error("Something went wrong! - removeBudget.ts");
  }
}
