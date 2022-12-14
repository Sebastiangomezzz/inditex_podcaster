import { screen, render } from "@testing-library/react";
import { TestWrapperComponentWithMemoryRouter } from "../../../../utils/test-utils/testWrapperComponent";
import { PodcastListItem } from "./PodcastListItem";

describe("PodcastListItem component tests", () => {
  const podcast = {
    "im:image": [
      { label: "Test Image1" },
      { label: "Test Image2" },
      { label: "Test Image3" },
    ],
    "im:name": {
      label: "Test name label",
    },
    "im:artist": {
      label: "Test Artist label",
    },
  };
  test("should render the component", () => {
    render(<PodcastListItem podcast={podcast} />, {
      wrapper: TestWrapperComponentWithMemoryRouter,
    });
      screen.getByText(/Test Artist label/i);
      screen.getByRole('img', { name: /Test name label/i });
  });
});
