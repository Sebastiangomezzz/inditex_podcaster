import { screen, render } from "@testing-library/react";
//components
import { PodcastsPage } from "./PodcastsPage";
import { TestWrapperComponentWithBrowserRouter } from "../../../utils/test-utils/TestWrapperComponent";

describe("PodcastsPage component tests", () => {
  test("renders a list of 100 items at PodcastsPage component", async () => {
    //test that the list items are rendered
    render(
      <TestWrapperComponentWithBrowserRouter>
        <PodcastsPage />
      </TestWrapperComponentWithBrowserRouter>
    );
    const listItems = await screen.findAllByText(/author/i);
    expect(listItems).toHaveLength(100);
  });
});
