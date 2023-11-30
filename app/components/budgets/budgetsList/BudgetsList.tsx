"use client";

import { useCallback, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { ToastContainer } from "react-toastify";
import { useBudget } from "@/app/contexts";
import { getBudgetsByMonth } from "@/app/datalayer";
import { BudgetCard, BudgetCardProps } from "../budgetCard";
import { Loader } from "../../common";

import "react-datepicker/dist/react-datepicker.css";
import "./budgetsList.css";

export function BudgetsList() {
  const [isLoading, setIsLoading] = useState(true);
  const { budgets, setBudgets, month, setMonth } = useBudget();

  const fetchData = useCallback(async () => {
    try {
      const data = await getBudgetsByMonth(month);

      setBudgets(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);

      setIsLoading(false);

      throw new Error("Something went wrong! - getAllBudgetsByMonth");
    }
  }, [month, setBudgets]);

  useEffect(() => {
    fetchData();
  }, [month, fetchData]);

  return (
    <>
      <div className="budgets-datepicker-wrapper">
        <label htmlFor="budgets-datepicker">Select date: </label>
        <DatePicker
          className="budgets-datepicker"
          id="budgets-datepicker"
          selected={month}
          isClearable
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          onChange={(newMonth) => setMonth(newMonth as Date)}
        />
      </div>

      {isLoading && (
        <div className="loader-wrapper">
          <Loader />
        </div>
      )}

      {!isLoading && budgets.length === 0 && (
        <span
          data-testid="no-budgets-created-text"
          className="no-budgets-created-text"
        >
          No budgets created yet for the specific month!
        </span>
      )}

      {budgets.map(
        ({ id, name, totalAmount, amountSpent }: BudgetCardProps) => (
          <BudgetCard
            key={name}
            id={id}
            name={name}
            totalAmount={totalAmount}
            amountSpent={amountSpent}
          />
        )
      )}

      <ToastContainer position="top-right" newestOnTop />
    </>
  );
}
