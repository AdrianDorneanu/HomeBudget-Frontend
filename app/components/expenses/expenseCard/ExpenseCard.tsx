"use client";

import { AiOutlineArrowUp } from "react-icons/ai";
import { IoPersonCircle } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import {
  Card,
  CardButtonsWrapper,
  CardInformations,
  CardTitle,
} from "../../common";
import { ExpenseCardActionButtons } from "./expenseCardActionButtons";

import "./expenseCard.css";

export interface ExpenseCardProps {
  id: string;
  name: string;
  buyer: string;
  amount: number;
  dateOfBuying: string;
}
export function ExpenseCard({
  id,
  name,
  buyer,
  amount,
  dateOfBuying,
}: ExpenseCardProps) {
  const informations = [
    {
      IconComponent: () => <AiOutlineArrowUp className="total-amount-arrow" />,
      TextComponent: () => <span data-testid="total-amount">{amount} RON</span>,
    },
    {
      IconComponent: () => <IoPersonCircle className="person-icon" />,
      TextComponent: () => <span data-testid="expense-buyer">{buyer}</span>,
    },
    {
      IconComponent: () => <CiCalendar className="calendar-icon" />,
      TextComponent: () => (
        <span data-testid="expense-date">
          {new Date(dateOfBuying).toLocaleDateString("ro-RO")}
        </span>
      ),
    },
  ];

  return (
    <Card>
      <div>
        <CardTitle name={name} />
        <CardInformations informations={informations} />
      </div>

      <CardButtonsWrapper>
        <ExpenseCardActionButtons id={id} />
      </CardButtonsWrapper>
    </Card>
  );
}
