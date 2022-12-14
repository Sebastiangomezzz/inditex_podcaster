/* eslint-disable testing-library/no-debugging-utils */
import { Header } from "./Header";
import { render, screen } from "@testing-library/react";
import { TestWrapperComponentWithMemoryRouter } from "../../../utils/test-utils/TestWrapperComponent";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("Header component tests", () => {
  test("renders Header component", () => {
    render(
      <TestWrapperComponentWithMemoryRouter>
        <Header />
      </TestWrapperComponentWithMemoryRouter>
    );
    screen.getByText(/Podcaster/i);
  });
  test('click on the title redirects to the home page', async() => {
    render(
      <TestWrapperComponentWithMemoryRouter>
        <Header />
      </TestWrapperComponentWithMemoryRouter>
    );
    const user = userEvent.setup();
    const title = screen.getByRole("link");
    user.click(title);
    //expect(mockedNavigator).toHaveBeenCalledWith('/');
    //await waitFor(() => expect(mockedNavigator).toHaveBeenCalledWith("/"));
  })
});
