import React, { useState, useEffect } from "react";
//components
import { PodcastEpisodeDetailCard } from "./PodcastEpisodeDetailCard/PodcastEpisodeDetailCard";
import { PodcastDetailCard } from "../common/PodcastDetailCard";
//styled components
import { Wrapper, ColumnWrapper } from "./PodcastEpisodeDetail.styles";

export const PodcastEpisodeDetail = ({ tracksData, trackId, podcastId }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
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
      <PodcastDetailCard podcastId={podcastId} />
      <ColumnWrapper>
        <PodcastEpisodeDetailCard currentTrack={currentTrack} />
      </ColumnWrapper>
    </Wrapper>
  );
};
