import { CardInformation, CardInformationProps } from "./cardInformation";

import "./cardInformations.css";

interface CardInformationsProps {
  informations: CardInformationProps[];
}
export function CardInformations({ informations }: CardInformationsProps) {
  return (
    <div className="card-informations-wrapper">
      {informations.map((information, idx) => (
        <CardInformation key={idx} {...information} />
      ))}
    </div>
  );
}
