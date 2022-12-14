import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  // test("user can click on a podcast and be redirected to the podcast detail page", async () => {
  //   //test that the list items are rendered
  //   render(
  //     <TestWrapperComponentWithBrowserRouter>
  //       <PodcastsPage />
  //     </TestWrapperComponentWithBrowserRouter>
  //   );
  //   const user = userEvent.setup();

  //   const listItems = await screen.findAllByText(/author/i);
  //   await user.click(listItems[0]);
  //   screen.debug()
  //   expect(screen.getByText(/episodes/i)).toBeInTheDocument();
  // });
});
