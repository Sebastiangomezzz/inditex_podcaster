import { screen, render } from "@testing-library/react";
import { PodcastDetailEpisodesList } from "./PodcastDetailEpisodesList";
import { TestWrapperComponentWithMemoryRouter } from "../../../../utils/test-utils/testWrapperComponent";
import userEvent from "@testing-library/user-event";

describe("PodcastDetailEpisodesList component tests", () => {
  test("should render PodcastDetailEpisodesList component", () => {
    const tracksData = {
      results: [
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
    render(
      <TestWrapperComponentWithMemoryRouter>
        <PodcastDetailEpisodesList tracksData={tracksData} />
      </TestWrapperComponentWithMemoryRouter>
    );
    screen.getByText(/Title/i);
    screen.getByText(/Date/i);
    screen.getByText(/Duration/i);
  });
  test("should render a list of clickable elements", () => {
    const user = userEvent.setup();
    const tracksData = {
      results: [
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
    render(
      <TestWrapperComponentWithMemoryRouter>
        <PodcastDetailEpisodesList tracksData={tracksData} />
      </TestWrapperComponentWithMemoryRouter>
    );
    const linkList = screen.getAllByRole("link", { name: /Test Track/i });
    user.click(linkList[0]);
  });
});
