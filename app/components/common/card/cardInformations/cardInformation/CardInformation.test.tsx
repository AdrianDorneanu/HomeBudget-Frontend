import { render } from "@testing-library/react";
import { CardInformation } from "./CardInformation";

describe('CardInformations', () => {
  it('should render successfully', () => {
    const IconComponent = () => <span>I am icon component</span>;
    const TextComponent = () => <span>I am text component</span>;

    const { baseElement } = render(<CardInformation IconComponent={IconComponent} TextComponent={TextComponent} />);

    expect(baseElement).toBeTruthy();
  });
});