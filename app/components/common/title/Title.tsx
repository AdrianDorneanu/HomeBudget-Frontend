import "./title.css";

interface TitleProps {
  title: string;
}
export function Title({ title }: TitleProps) {
  return (
    <h1 data-testid="page-title" className="page-title">
      {title}
    </h1>
  );
}
