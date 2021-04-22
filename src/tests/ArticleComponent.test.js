import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ArticleComponent from "../ArticleComponent";

const mockData = {
  pageid: 13834,
  ns: 0,
  title: '"Hello, World!" program',
  index: 5,
  extract:
    'A "Hello, World!" program generally is a computer program that outputs or displays the message "Hello, World!". Such a program is very simple in most programming languages, and is often used to illustrate the basic syntax of a programming language.',
};

describe("<ArticleComponent />", () => {
  it("Renders without crashing", () => {
    render(<ArticleComponent data={mockData} />);
  });

  it("It is visible", () => {
    const { container } = render(<ArticleComponent data={mockData} />);
    const title = container.querySelector(".title");
    const articleText = container.querySelector(".text-content");
    expect(title.textContent).toBe(mockData.title);
    expect(articleText.textContent).toBe(mockData.extract);
    expect(title).toBeVisible();
    expect(articleText).toBeVisible();
  });

  it("Link is valid", () => {
    const { container } = render(<ArticleComponent data={mockData} />);
    const link = container.querySelector(".articleLink");
    expect(link).toHaveProperty(
      "href",
      `https://en.wikipedia.org/?curid=${mockData.pageid}`
    );
  });

  it("Component is valid", () => {
    const { container } = render(<ArticleComponent data={mockData} />);
    const title = container.querySelector(".title");
    expect(title).toBeValid();
  });
});
