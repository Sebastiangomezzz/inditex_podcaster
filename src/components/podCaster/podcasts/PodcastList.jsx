import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//hooks
import { useGetAllPodcasts } from "../../../hooks/useGetAllPodcasts";
//components
import { PodcastListItem } from "./PodcastListItem/PodcastListItem";
import { PodcastListSearchBar } from "./PodcastListSearchBar/PodcastListSearchBar";
//styled components
import { Wrapper, SearchbarWrapper, ListWrapper } from "./PodcastList.styles";
//redux
//import { useDispatch } from "react-redux";
//import { setLoading } from "redux/features/loading";

export const PodcastList = () => {
  const { data, isLoading } = useGetAllPodcasts();
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  //const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setLoading(isLoading));
  // }, [isLoading, dispatch]);

  return (
    <Wrapper>
      <SearchbarWrapper>
        <PodcastListSearchBar
          data={data}
          setFilteredPodcasts={setFilteredPodcasts}
          filteredPodcasts={filteredPodcasts}
        />
      </SearchbarWrapper>
      <ListWrapper>
        {filteredPodcasts?.map((podcast) => (
          <Link
            key={podcast.id.attributes["im:id"]}
            to={`/podcast/${podcast.id.attributes["im:id"]}`}
          >
            <PodcastListItem podcast={podcast} />
          </Link>
        ))}
      </ListWrapper>
    </Wrapper>
  );
};
