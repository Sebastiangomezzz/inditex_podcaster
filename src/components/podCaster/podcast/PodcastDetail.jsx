import { useEffect } from "react";
import { useParams } from "react-router-dom";
//components
import { PodcastDetailHeader } from "./PodcastDetailHeader";
import { PodcastDetailEpisodesList } from "./PodcastDetailEpisodesList";
import { PodcastDetailCard } from "../common/PodcastDetailCard";
//styled components
import { Wrapper, ColumnWrapper } from "./PodcastDetail.styles";
//hooks
import { useGetTracksByPodcastId } from "../../../hooks/useGetTracksByPodcastId";
//context
import { useContext } from "react";
import { LoadingContext } from "../../../context/LoadingContext";

export const PodcastDetail = () => {
  const { podcastId } = useParams();
  const { data: tracksData, isLoading } = useGetTracksByPodcastId(podcastId);
  const { setIsContextLoading } = useContext(LoadingContext);

  useEffect(() => {
    setIsContextLoading(isLoading);
  }, [isLoading, setIsContextLoading]);
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
