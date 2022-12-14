import { screen, render } from "@testing-library/react";
import { TestWrapperComponentWithMemoryRouter } from "../../../../utils/test-utils/testWrapperComponent";
import { PodcastListSearchBar } from "./PodcastListSearchBar";

describe("PodcastListSearchBar component tests", () => {
  const data = {
    feed: {
      entry: [
        {
          "im:name": {
            label: "Test name label",
          },
          "im:artist": {
            label: "Test Artist label",
          },
        },
        {
          "im:name": {
            label: "name label2",
          },
          "im:artist": {
            label: "Artist label2",
          },
        },
      ],
    },
  };
  const setFilteredPodcasts = jest.fn();
  const filteredPodcasts = [];

  test("should render the component", () => {
    render(
      <PodcastListSearchBar
        data={data}
        setFilteredPodcasts={setFilteredPodcasts}
        filteredPodcasts={filteredPodcasts}
      />,
      {
        wrapper: TestWrapperComponentWithMemoryRouter,
      }
    );
    screen.getByRole("textbox");
  });
});
