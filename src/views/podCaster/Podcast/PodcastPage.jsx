import { useEffect } from "react";
import { useParams } from "react-router-dom";
//components
import { PodcastDetail } from "../../../components/podCaster";
//hooks
import { useGetTracksByPodcastId } from "../../../hooks/useGetTracksByPodcastId";
//context
import { useContext } from "react";
import { LoadingContext } from "../../../context/LoadingContext";

export const PodcastPage = () => {
  const { podcastId } = useParams();
  const { data: tracksData, isLoading } = useGetTracksByPodcastId(podcastId);
  const { setIsContextLoading } = useContext(LoadingContext);

  useEffect(() => {
    setIsContextLoading(isLoading);
  }, [isLoading, setIsContextLoading]);

  return <PodcastDetail podcastId={podcastId} tracksData={tracksData} />;
};
