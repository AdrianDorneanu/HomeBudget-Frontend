import { render } from "@testing-library/react";
import { Card } from "./Card";

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card>I am a card</Card>);

    expect(baseElement).toBeTruthy();
  });
});