import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchBox from "../SearchBox";

describe("<SearchBox />", () => {
  it("Renders without crashing", () => {
    render(<SearchBox />);
  });

  it("Input works fine", () => {
    const { container } = render(<SearchBox searchQuery={"Hello"} />);
    const input = container.querySelector("input");
    expect(input).toHaveProperty("value", "Hello");
    expect(input).toBeVisible();
  });

  it("Proper style when there is more than one article", () => {
    const { container } = render(<SearchBox articles={["1", "2", "3"]} />);
    const boxContainer = container.querySelector(".container");
    expect(boxContainer).toHaveStyle("position: relative");
    expect(boxContainer).toHaveStyle("margin: 1em auto");
    expect(boxContainer).toBeVisible();
  });

  it("Proper style when there are no articles", () => {
    const { container } = render(<SearchBox />);
    const boxContainer = container.querySelector(".container");
    expect(boxContainer).toHaveStyle("position: absolute");
    expect(boxContainer).toHaveStyle("margin: auto");
    expect(boxContainer).toBeVisible();
  });

  it("Search box is valid", () => {
    const { container } = render(<SearchBox />);
    const boxContainer = container.querySelector(".container");
    expect(boxContainer).toBeValid();
  });
});
