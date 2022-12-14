import { Layout } from "./Layout";
import { Header } from "../Header/Header";
import { render, screen } from "@testing-library/react";
import { TestWrapperComponentWithMemoryRouter } from "../../../utils/test-utils/TestWrapperComponent";

describe("Layout component tests", () => {
  test("renders Layout component", () => {
    render(
      <TestWrapperComponentWithMemoryRouter>
        <Layout header={<Header />} />
      </TestWrapperComponentWithMemoryRouter>
    );
    screen.getByText(/Podcaster/i);
  });
});
