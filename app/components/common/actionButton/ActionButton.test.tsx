import { render } from "@testing-library/react";
import { ActionButton } from ".";

describe("ActionButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ActionButton href="" text="" />);

    expect(baseElement).toBeTruthy();
  });

  it("should have the right url", () => {
    const { getByRole } = render(<ActionButton href="/link-to" text="" />);

    const link = getByRole("link");

    expect(link.getAttribute("href")).toBe("/link-to");
  });

  it("should have the right button text", () => {
    const { getByTestId } = render(
      <ActionButton href="" text="I am a button" />
    );

    const buttonText = getByTestId("action-button-text").textContent;

    expect(buttonText).toBe("I am a button");
  });
});
