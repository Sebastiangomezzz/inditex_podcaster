import {useEffect} from "react";
import { useParams } from "react-router-dom";
//components
import { PodcastDetail } from "../../../components/podCaster";
//hooks
import { useGetTracksByPodcastId } from "../../../hooks/useGetTracksByPodcastId";
// //redux
// import { useDispatch } from "react-redux";
// import { setLoading } from "redux/features/loading";

export const PodcastPage = () => {
  const { podcastId } = useParams();
  const { data: tracksData, isLoading } = useGetTracksByPodcastId(podcastId);
  
  //const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setLoading(isLoading));
  // }, [isLoading, dispatch]);

  return <PodcastDetail podcastId={podcastId} tracksData={tracksData } />;
};
