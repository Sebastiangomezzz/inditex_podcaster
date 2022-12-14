import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//components
import { PodcastEpisodeDetailCard } from "./PodcastEpisodeDetailCard/PodcastEpisodeDetailCard";
import { PodcastDetailCard } from "../common/PodcastDetailCard";
//styled components
import { Wrapper, ColumnWrapper } from "./PodcastEpisodeDetail.styles";
//hooks
import {useGetAllPodcasts} from "../../../hooks/useGetAllPodcasts";
import { useGetTracksByPodcastId } from "../../../hooks/useGetTracksByPodcastId";
//context
import { useContext } from "react";
import { LoadingContext } from "../../../context/LoadingContext";

export const PodcastEpisodeDetail = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const { podcastId, episodeId: trackId } = useParams();
  const { data } = useGetAllPodcasts();
  const { data: tracksData, isLoading } = useGetTracksByPodcastId();
  const { setIsContextLoading } = useContext(LoadingContext);
  //filter the data to get the podcast with the same id as the one in the url
  const podcast = data?.feed?.entry?.find(
    (podcast) => podcast.id.attributes["im:id"] === podcastId
  );

  useEffect(() => {
    setIsContextLoading(isLoading);
  }, [isLoading, setIsContextLoading]);

  useEffect(() => {
    if (tracksData) {
      const track = tracksData.results.find(
        (track) => track.trackId === Number(trackId)
      );
      setCurrentTrack(track);
    }
  }, [tracksData, trackId]);
  

  return (
    <Wrapper>
      <PodcastDetailCard podcast={podcast} podcastId={podcastId} />
      <ColumnWrapper>
        <PodcastEpisodeDetailCard currentTrack={currentTrack} />
      </ColumnWrapper>
    </Wrapper>
  );
};
