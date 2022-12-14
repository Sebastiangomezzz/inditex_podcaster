import { useEffect } from "react";
import { useParams } from "react-router-dom";
//components
import { PodcastDetailHeader } from "./PodcastDetailHeader";
import { PodcastDetailEpisodesList } from "./PodcastDetailEpisodesList";
import { PodcastDetailCard } from "../common/PodcastDetailCard";
//styled components
import { Wrapper, ColumnWrapper } from "./PodcastDetail.styles";
//hooks
import { useGetAllPodcasts } from "../../../hooks/useGetAllPodcasts";
import { useGetTracksByPodcastId } from "../../../hooks/useGetTracksByPodcastId";
//context
import { useContext } from "react";
import { LoadingContext } from "../../../context/LoadingContext";

export const PodcastDetail = () => {
  const { podcastId } = useParams();
  const { data } = useGetAllPodcasts();
  const { data: tracksData, isLoading } = useGetTracksByPodcastId(podcastId);
  const { setIsContextLoading } = useContext(LoadingContext);
  //filter the data to get the podcast with the same id as the one in the url
  const podcast = data?.feed?.entry?.find(
    (podcast) => podcast.id.attributes["im:id"] === podcastId
  );
  useEffect(() => {
    setIsContextLoading(isLoading);
  }, [isLoading, setIsContextLoading]);
  return (
    <Wrapper>
      <PodcastDetailCard podcast={podcast} podcastId={podcastId} />
      <ColumnWrapper>
        <PodcastDetailHeader tracksData={tracksData} />
        <PodcastDetailEpisodesList tracksData={tracksData} />
      </ColumnWrapper>
    </Wrapper>
  );
};
