import { screen, render, waitFor } from "@testing-library/react";
import { PodcastDetailEpisodesList } from "./PodcastDetailEpisodesList";
import { TestWrapperComponentWithMemoryRouter } from "../../../../utils/test-utils/testWrapperComponent";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

const mockedLink = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: (props) => <div {...props} onClick={mockedLink} />,
}));

describe("PodcastDetailEpisodesList component tests", () => {
  const tracksData = {
    results: [
      {
        artistId: 123456,
        collectionId: 123456,
        trackId: 1234561,
        artistName: "Test Artist",
        collectionName: "Test Collection",
        trackName: "Test Track1",
        trackTimeMillis: 123456,
        releaseDate: "2021-08-31T07:00:00Z",
      },
      {
        artistId: 123456,
        collectionId: 123456,
        trackId: 1234562,
        artistName: "Test Artist",
        collectionName: "Test Collection",
        trackName: "Test Track2",
        trackTimeMillis: 123456,
        releaseDate: "2021-08-31T07:00:00Z",
      },
      {
        artistId: 123456,
        collectionId: 123456,
        trackId: 1234563,
        artistName: "Test Artist",
        collectionName: "Test Collection",
        trackName: "Test Track3",
        trackTimeMillis: 123456,
        releaseDate: "2021-08-31T07:00:00Z",
      },
      {
        artistId: 123456,
        collectionId: 123456,
        trackId: 1234564,
        artistName: "Test Artist",
        collectionName: "Test Collection",
        trackName: "Test Track4",
        trackTimeMillis: 123456,
        releaseDate: "2021-08-31T07:00:00Z",
      },
    ],
  };
  test("should render PodcastDetailEpisodesList component", () => {
    render(
      <TestWrapperComponentWithMemoryRouter>
        <PodcastDetailEpisodesList tracksData={tracksData} />
      </TestWrapperComponentWithMemoryRouter>
    );
    screen.getByText(/Title/i);
    screen.getByText(/Date/i);
    screen.getByText(/Duration/i);
  });

  test("should render a list of clickable elements", async () => {
    const user = userEvent.setup();
    render(
      <TestWrapperComponentWithMemoryRouter>
        <PodcastDetailEpisodesList tracksData={tracksData} />
      </TestWrapperComponentWithMemoryRouter>
    );
    const linkList = screen.getAllByTestId("episodeLink");
    await user.click(linkList[0]);
    await waitFor(() => expect(mockedLink).toHaveBeenCalled());
  });
});
