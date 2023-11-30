import "./cardTitle.css";

interface CardTitleProps {
  name: string;
}
export function CardTitle({ name }: CardTitleProps) {
  return (
    <h1 data-testid="card-title-name" className="card-title-name">
      {name}
    </h1>
  );
}
