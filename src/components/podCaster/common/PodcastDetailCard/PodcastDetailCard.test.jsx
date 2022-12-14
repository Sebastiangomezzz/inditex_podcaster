import { render, screen } from "@testing-library/react";
//components
import { PodcastDetailCard } from "./PodcastDetailCard";
//utils
import { TestWrapperComponentWithMemoryRouter } from "../../../../utils/test-utils/testWrapperComponent";

describe("PodcastDetailCard component tests", () => {
  test("should render the PodcastDetailCard component", () => {
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
    render(
      <TestWrapperComponentWithMemoryRouter>
        <PodcastDetailCard podcastId={podcastId} podcast={podcast} />
      </TestWrapperComponentWithMemoryRouter>
    );
    screen.getByText(/HOW DID THIS GET MADE?/i);
  });
});
