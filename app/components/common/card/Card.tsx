import "./card.css";

interface CardProps {
  children: React.ReactNode;
  hasDeleteIcon?: boolean;
  hasViewIcon?: boolean;
}
export function Card({ children, hasViewIcon, hasDeleteIcon }: CardProps) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
