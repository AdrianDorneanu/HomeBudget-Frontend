import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NavBar } from "./components";

import "./globals.css";
import { BudgetProvider, ExpenseProvider } from "./contexts";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "HomeBudget",
  description:
    "Your best friend when it comes to manage your expenses in the family.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header>
          <NavBar />
        </header>
        <div className="homepage-content-wrapper">
          <BudgetProvider>
            <ExpenseProvider>{children}</ExpenseProvider>
          </BudgetProvider>
        </div>
      </body>
    </html>
  );
}
