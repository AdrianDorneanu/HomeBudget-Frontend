import "./cardInformation.css";

export interface CardInformationProps {
  IconComponent: () => React.ReactElement;
  TextComponent: () => React.ReactElement;
}
export function CardInformation({
  IconComponent,
  TextComponent,
}: CardInformationProps) {
  return (
    <div className="card-information">
      <IconComponent />
      <TextComponent />
    </div>
  );
}
