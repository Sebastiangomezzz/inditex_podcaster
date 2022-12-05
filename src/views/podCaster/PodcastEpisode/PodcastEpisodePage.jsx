import { useEffect } from "react";
import { useParams } from "react-router-dom";
//components
import { PodcastEpisodeDetail } from "../../../components/podCaster";
//hooks
import { useGetTracksByPodcastId } from "../../../hooks/useGetTracksByPodcastId";
//context
import { useContext } from "react";
import { LoadingContext } from "../../../context/LoadingContext";

export const PodcastEpisodePage = () => {
  const { podcastId, episodeId } = useParams();
  const { data: tracksData, isLoading } = useGetTracksByPodcastId();
  const { setIsContextLoading } = useContext(LoadingContext);

  useEffect(() => {
    setIsContextLoading(isLoading);
  }, [isLoading, setIsContextLoading]);

  return (
    <PodcastEpisodeDetail
      tracksData={tracksData}
      trackId={episodeId}
      podcastId={podcastId}
    />
  );
};
