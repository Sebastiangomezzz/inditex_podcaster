import { render, screen, waitFor } from "@testing-library/react";
//components
import { PodcastDetailCard } from "./PodcastDetailCard";
import { TestWrapperComponentWithMemoryRouter } from "../../../../utils/test-utils/testWrapperComponent";
//utils
import userEvent from "@testing-library/user-event";

const mockedLink = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: (props) => <div {...props} onClick={mockedLink} />,
}));

describe("PodcastDetailCard component tests", () => {
  const podcastId = "123456";
  const podcast = {
    "im:artist": {
      attributes: {
        href: "https://podcasts.apple.com/us/artist/earwolf/144058620",
      },
      label: "Earwolf",
    },
    "im:name": {
      label: "How Did This Get Made?",
    },
    "im:image": [
      {
        attributes: {
          height: "170",
        },
        label:
          "https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/7b/0d/7b/7b0d7b3a-1b1a-1b2a-1b1a-1b1a1b1a1b1a/mza_14600000000000000000.jpg/170x170bb.png",
      },
      {
        attributes: {
          height: "600",
        },
        label:
          "https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/7b/0d/7b/7b0d7b3a-1b1a-1b2a-1b1a-1b1a1b1a1b1a/mza_14600000000000000000.jpg/600x600bb.png",
      },
      {
        attributes: {
          height: "600",
        },
        label:
          "https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/7b/0d/7b/7b0d7b3a-1b1a-1b2a-1b1a-1b1a1b1a1b1a/mza_14600000000000000000.jpg/600x600bb.png",
      },
    ],
    summary: {
      label:
        "Paul Scheer, Jason Mantzoukas and June Diane Raphael watch a bad movie so you don't have to. Each week they'll be joined by a special guest to discuss the movie, their own personal history with it, and how it holds up today. It's a movie podcast for people who hate movie podcasts.",
    },
  };
  test("should render the PodcastDetailCard component", () => {
    render(
      <TestWrapperComponentWithMemoryRouter>
        <PodcastDetailCard podcastId={podcastId} podcast={podcast} />
      </TestWrapperComponentWithMemoryRouter>
    );
    expect(screen.getByText(/HOW DID THIS GET MADE?/i)).toBeTruthy();
  });
  test("should redirect to the podcast detail page when the user clicks on the podcast title", async () => {
    render(
      <TestWrapperComponentWithMemoryRouter>
        <PodcastDetailCard podcastId={podcastId} podcast={podcast} />
      </TestWrapperComponentWithMemoryRouter>
    );
    const user = userEvent.setup();
    const cardLink = screen.getByTestId("podcastDetailCardLink");
    await user.click(cardLink);
    await waitFor(() => {
      expect(mockedLink).toHaveBeenCalled();
    });
  });
});
