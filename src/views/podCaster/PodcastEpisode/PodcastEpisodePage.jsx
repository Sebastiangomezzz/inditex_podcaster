import {useEffect} from "react";
import { useParams } from "react-router-dom";
//components
import { PodcastEpisodeDetail } from "../../../components/podCaster";
//hooks
import { useGetTracksByPodcastId } from "../../../hooks/useGetTracksByPodcastId";
//redux
// import { useDispatch } from "react-redux";
// import { setLoading } from "redux/features/loading";

export const PodcastEpisodePage = () => {
  const { podcastId, episodeId } = useParams();
  const { data: tracksData, isLoading } = useGetTracksByPodcastId();
  //const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(setLoading(isLoading));
  }, [isLoading]);

  return (
    <PodcastEpisodeDetail
      tracksData={tracksData}
      trackId={episodeId}
      podcastId={podcastId}
    />
  );
};
