import { Layout } from "./Layout";
import { Header } from "../Header/Header";
import { render, screen } from "@testing-library/react";
import { TestWrapperComponentWithMemoryRouter } from "../../../utils/test-utils/TestWrapperComponent";
import "@testing-library/jest-dom/extend-expect";

describe("Layout component tests", () => {
  test("renders Layout component", () => {
    render(
      <TestWrapperComponentWithMemoryRouter>
        <Layout header={<Header />} />
      </TestWrapperComponentWithMemoryRouter>
    );
    const title = screen.getByText(/Podcaster/i);
    expect(title).toBeInTheDocument();
  });
});
