"use client";

import { useCallback, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { BudgetCard, BudgetCardProps } from "../budgetCard";
import { Loader } from "../../common";
import { useBudget } from "@/app/contexts";

import "react-datepicker/dist/react-datepicker.css";
import "./budgetsList.css";

export function BudgetsList() {
  const [month, setMonth] = useState<Date | null>(new Date());
  const [isLoading, setIsLoading] = useState(true);
  const { budgets, setBudgets }: any = useBudget();

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:7127/api/budget?date=${month?.toISOString()}`
      );
      const data = await response.json();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month]);

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
          onChange={(newMonth) => setMonth(newMonth)}
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
    </>
  );
}
