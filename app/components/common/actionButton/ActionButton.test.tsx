import { render } from "@testing-library/react";
import { ActionButton } from ".";

describe("ActionButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ActionButton disabled={false} text="" />);

    expect(baseElement).toBeTruthy();
  });

  it("should have the right button text", () => {
    const { getByTestId } = render(
      <ActionButton disabled={false} text="I am a button" />
    );

    const buttonText = getByTestId("action-button-text").textContent;

    expect(buttonText).toBe("I am a button");
  });
});
