import { Header } from "./Header";
import { render, screen } from "@testing-library/react";
import { TestWrapperComponentWithMemoryRouter } from "../../../utils/test-utils/TestWrapperComponent";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const mockedLink = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: (props) => <div {...props} onClick={mockedLink} />,
}));

describe("Header component tests", () => {
  test("renders Header component", () => {
    render(
      <TestWrapperComponentWithMemoryRouter>
        <Header />
      </TestWrapperComponentWithMemoryRouter>
    );
    const title = screen.getByText(/Podcaster/i);
    expect(title).toBeInTheDocument();
  });
  test("click on the title redirects to the home page", async () => {
    render(
      <TestWrapperComponentWithMemoryRouter>
        <Header />
      </TestWrapperComponentWithMemoryRouter>
    );
    const user = userEvent.setup();
    const title = screen.getByTestId("headerLink");
    user.click(title);
    await waitFor(() => expect(mockedLink).toHaveBeenCalled());
  });
});
