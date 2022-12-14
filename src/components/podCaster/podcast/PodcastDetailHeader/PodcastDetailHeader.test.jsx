import { screen, render } from "@testing-library/react";
import { TestWrapperComponentWithMemoryRouter } from "../../../../utils/test-utils/testWrapperComponent";
import { PodcastDetailHeader } from "./PodcastDetailHeader";

describe("PodcastDetailHeader component tests", () => {
  test("should render the component", () => {
    render(<PodcastDetailHeader />, {
      wrapper: TestWrapperComponentWithMemoryRouter,
    });
    screen.getByText(/Episodes/i);
  });
  test("should render the component with the correct number of episodes", () => {
    const tracksData = {
      results: [
        {
          trackCount: 2,
          artistId: 123456,
          collectionId: 123456,
          trackId: 123456,
          artistName: "Test Artist",
          collectionName: "Test Collection",
          trackName: "Test Track",
          trackTimeMillis: 123456,
          releaseDate: "2021-08-31T07:00:00Z",
        },
        {
          artistId: 123456,
          collectionId: 123456,
          trackId: 123456,
          artistName: "Test Artist",
          collectionName: "Test Collection",
          trackName: "Test Track",
          trackTimeMillis: 123456,
          releaseDate: "2021-08-31T07:00:00Z",
        },
      ],
    };
    render(<PodcastDetailHeader tracksData={tracksData} />, {
      wrapper: TestWrapperComponentWithMemoryRouter,
    });
    screen.getByText(/2/i);
  });
});
