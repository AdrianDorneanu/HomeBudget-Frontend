import Link from "next/link";

import "./actionButton.css";

export interface ActionButtonProps {
  href?: string;
  text: string;
}
export function ActionButton({ href = "", text }: ActionButtonProps) {
  return (
    <Link
      data-testid="action-button-link"
      href={href}
      className="action-button"
    >
      <span data-testid="action-button-text">{text}</span>
    </Link>
  );
}
