import { PodcastDetailHeader } from "./PodcastDetailHeader";
import { PodcastDetailEpisodesList } from "./PodcastDetailEpisodesList";
import { PodcastDetailCard } from "../common/PodcastDetailCard";
import { Wrapper, ColumnWrapper } from "./PodcastDetail.styles";

export const PodcastDetail = ({ podcastId, tracksData }) => {
  return (
    <Wrapper>
      <PodcastDetailCard podcastId={podcastId} />
      <ColumnWrapper>
        <PodcastDetailHeader tracksData={tracksData} />
        <PodcastDetailEpisodesList tracksData={tracksData} />
      </ColumnWrapper>
    </Wrapper>
  );
};
