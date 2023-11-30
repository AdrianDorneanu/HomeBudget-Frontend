import "./cardButtonsWrapper.css";

interface CardButtonsWrapperProps {
  children: React.ReactNode;
}
export function CardButtonsWrapper({ children }: CardButtonsWrapperProps) {
  return <div className="card-buttons-wrapper">{children}</div>;
}
