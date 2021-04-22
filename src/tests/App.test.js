import { render } from "@testing-library/react";
import App from "../App";

describe("<ArticleComponent />", () => {
  it("It is visible", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Random article/)).toBeVisible();
  });

  it("It is valid", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Random article/)).toBeValid();
  });
});
