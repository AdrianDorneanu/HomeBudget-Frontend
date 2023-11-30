import { render } from "@testing-library/react";
import { CardTitle } from "./CardTitle";

describe("CardTitle", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CardTitle name="" />);

    expect(baseElement).toBeTruthy();
  });

  it("should have the right name", () => {
    const { getByTestId } = render(<CardTitle name="Pantaloni" />);

    const name = getByTestId("card-title-name").textContent;

    expect(name).toBe("Pantaloni");
  });
});
