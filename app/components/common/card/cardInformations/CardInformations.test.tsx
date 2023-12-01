import { render } from "@testing-library/react";
import { CardInformations } from "./CardInformations";

describe('CardInformations', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardInformations informations={[]} />);

    expect(baseElement).toBeTruthy();
  });
});