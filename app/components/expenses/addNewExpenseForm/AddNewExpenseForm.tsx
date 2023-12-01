'use client';

import { FormEvent, useState } from "react";
import DatePicker from "react-datepicker";
import { getFirstDayOfTheMonth, getLastDayOfTheMonth } from "../../../utils";
import { ActionButton } from "../../common";
import { useExpense } from "../../../contexts";

import "react-datepicker/dist/react-datepicker.css";
import './addNewExpenseForm.css';

interface AddNewExpenseFormProps {
  budgetId: string;
  dateOfBudgetCreation: string;
}
export function AddNewExpenseForm({ budgetId, dateOfBudgetCreation }: AddNewExpenseFormProps) {
  const { addExpense }: any = useExpense();

  const [name, setName] = useState("");
  const [buyer, setBuyer] = useState("");
  const [amount, setAmount] = useState(0);
  const [dateOfBuying, setDateOfBuying] = useState<Date>(getFirstDayOfTheMonth(new Date(dateOfBudgetCreation)));

  const firstDayOfTheMonth = getFirstDayOfTheMonth(dateOfBuying);
  const lastDayOfTheMonth = getLastDayOfTheMonth(dateOfBuying);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newExpense = {
      name,
      buyer,
      amount,
      dateOfBuying,
      budgetId
    };

    addExpense(newExpense);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-expense-input-wrapper">
        <label className="add-expense-label" htmlFor="expense-name">
          Name:
        </label>
        <input
          id="expense-name"
          data-testid="expense-name"
          placeholder="Enter the name of the expense (ex. Colanti sport)"
          onChange={(e) => setName(e.target.value)}
          className="add-expense-input"
          type="text"
        />
      </div>

      <div className="add-expense-input-wrapper">
        <label className="add-expense-label" htmlFor="expense-buyer">
          Buyer:
        </label>
        <input
          id="expense-buyer"
          data-testid="expense-buyer"
          placeholder="Enter the name of the buyer (ex. Puiu)"
          onChange={(e) => setBuyer(e.target.value)}
          className="add-expense-input"
          type="text"
        />
      </div>

      <div className="add-expense-input-wrapper">
        <label className="add-expense-label" htmlFor="expense-amount">Amount:</label>
        <input
          id="expense-amount"
          data-testid="expense-amount"
          placeholder="Enter the amountof the expense (ex. 1000)"
          onChange={(e) => setAmount(Number(e.target.value))}
          className="add-expense-input"
          type="number"
        />
      </div>

      <div className="add-expense-input-wrapper">
        <label className="add-expense-label" htmlFor="expense-date-of-buying">Select date: </label>
        <div className="add-expense-datepicker-wrapper">
          <DatePicker
            className="add-expense-datepicker"
            placeholderText="Select the date of buying"
            id="expense-date-of-buying"
            selected={dateOfBuying}
            minDate={firstDayOfTheMonth}
            maxDate={lastDayOfTheMonth}
            onChange={(newDate) => setDateOfBuying(newDate as Date)}
          />
        </div>
      </div>

      <ActionButton
        text="Add new"
        disabled={!name || !amount || !buyer}
      />
    </form>
  );
}
