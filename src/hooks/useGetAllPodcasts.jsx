import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

export const useGetAllPodcasts = () => {
  const fetchPodcasts = useCallback(async () => {
    const response = await fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch podcasts");
    }
    return response.json();
  }, []);
  const { isLoading, data, error } = useQuery(["podcasts"], fetchPodcasts, {
    staleTime: 1000 * 60 * 60 * 24,
  });
  return { isLoading, data, error };
};
