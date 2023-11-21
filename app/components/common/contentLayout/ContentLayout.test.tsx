import { render } from "@testing-library/react";
import { ContentLayout } from "./ContentLayout";

describe("ContentLayout", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ContentLayout>
        <span>I am an element inside the layout</span>
      </ContentLayout>
    );

    expect(baseElement).toBeTruthy();
  });
});
