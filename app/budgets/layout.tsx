import Link from "next/link";
import { Title } from "../components";

import "./budgetsLayout.css";

interface BudgetsLayoutProps {
  children: React.ReactNode;
}
export default function BudgetsLayout({ children }: BudgetsLayoutProps) {
  return (
    <>
      <Title title="Budgets" />
      <div className="budgets-page-wrapper">{children}</div>
      <Link href="/add-budget" className="add-new-budget-button">
        Add new budget
      </Link>
    </>
  );
}
