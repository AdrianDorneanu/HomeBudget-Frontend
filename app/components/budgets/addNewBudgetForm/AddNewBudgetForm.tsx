"use client";

import { FormEvent, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./addNewBudgetForm.css";
import { addNewBudget } from "@/app/datalayer";
import { useBudget } from "@/app/contexts";

export function AddNewBudgetForm() {
  const [month, setMonth] = useState<Date | null>(new Date());
  const [name, setName] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const { addBudget }: any = useBudget();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newBudget = {
      name,
      month,
      totalAmount,
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
      <div className="add-budget-input-wrapper">
        <label className="add-budget-label">Month:</label>
        <div className="datepicker-wrapper">
          <DatePicker
            className="budgets-datepicker"
            id="budgets-datepicker"
            selected={month}
            isClearable
            dateFormat="MMMM yyyy"
            showMonthYearPicker
            onChange={(newMonth) => setMonth(newMonth)}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!name || !totalAmount || !month}
        className="add-new-budget-button"
      >
        Add new
      </button>
    </form>
  );
}
