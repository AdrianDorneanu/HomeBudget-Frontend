"use client";

import { FormEvent, useState } from "react";
import { addNewBudget } from "@/app/datalayer";
import { useBudget } from "@/app/contexts";

import "./addNewBudgetForm.css";

export function AddNewBudgetForm() {
  const [name, setName] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const { addBudget, month }: any = useBudget();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newBudget = {
      name,
      totalAmount,
      month,
    };

    const data = await addNewBudget(newBudget);

    if (data) {
      addBudget(data);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-budget-input-wrapper">
        <label className="add-budget-label" htmlFor="budget-name">
          Name:
        </label>
        <input
          placeholder="Enter the name of the budget (ex. Sport)"
          onChange={(e) => setName(e.target.value)}
          className="add-budget-input"
          type="text"
        />
      </div>
      <div className="add-budget-input-wrapper">
        <label className="add-budget-label">Total amount:</label>
        <input
          placeholder="Enter the total amount of the budget (ex. 1000)"
          onChange={(e) => setTotalAmount(Number(e.target.value))}
          className="add-budget-input"
          type="number"
        />
      </div>

      <button
        type="submit"
        disabled={!name || !totalAmount}
        className="add-new-budget-button"
      >
        Add new
      </button>
    </form>
  );
}
