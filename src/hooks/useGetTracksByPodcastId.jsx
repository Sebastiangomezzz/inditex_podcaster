import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { useParams } from "react-router-dom";

export const useGetTracksByPodcastId = () => {
  const { podcastId } = useParams();
  const fetchTracks = useCallback(async () => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch tracks");
    }
    return response.json();
  }, [podcastId]);
  const { isLoading, data, error } = useQuery(["tracks", podcastId], fetchTracks, {
    staleTime: 1000 * 60 * 60 * 24,
  });
  return { isLoading, data, error };
};
