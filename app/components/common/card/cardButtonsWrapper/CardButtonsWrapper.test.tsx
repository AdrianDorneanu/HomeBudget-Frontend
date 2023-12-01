import { render } from "@testing-library/react";
import { CardButtonsWrapper } from "./CardButtonsWrapper";

describe('CardButtonsWrappers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardButtonsWrapper>I am card buttons wrapper</CardButtonsWrapper>);

    expect(baseElement).toBeTruthy();
  });
});