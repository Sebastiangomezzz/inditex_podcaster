import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//hooks
import { useGetAllPodcasts } from "../../../hooks/useGetAllPodcasts";
//components
import { PodcastListItem } from "./PodcastListItem/PodcastListItem";
//styled components
import {
  Wrapper,
  ListWrapper,
  SearchbarWrapper,
  SearchBarInnerWrapper,
} from "./PodcastList.styles";
//context
import { useContext } from "react";
import { LoadingContext } from "../../../context/LoadingContext";
//material ui
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";

export const PodcastList = () => {
  const { data, isLoading } = useGetAllPodcasts();
  const { setIsContextLoading } = useContext(LoadingContext);

  const [filteredPodcasts, setFilteredPodcasts] = useState(data?.feed.entry);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsContextLoading(isLoading);
  }, [isLoading, setIsContextLoading]);

  useEffect(() => {
    setFilteredPodcasts(
      data?.feed.entry.filter((podcast) =>
        podcast["im:name"].label
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, data?.feed.entry]);

  const handleSearchbarInputChange = ({target}) => {
    setSearchTerm(target.value);
  };

  return (
    <Wrapper>
      <SearchbarWrapper>
        <SearchBarInnerWrapper>
          <Badge
            badgeContent={filteredPodcasts?.length}
            color="primary"
            showZero
            max={999}
          />
          <TextField
            variant="outlined"
            onChange={handleSearchbarInputChange}
            type="text"
            placeholder="Filter podcasts..."
            underline="none"
          />
        </SearchBarInnerWrapper>
      </SearchbarWrapper>
      <ListWrapper>
        {filteredPodcasts?.length === 0 ? (
          <h1>No results found...</h1>
        ) : (
          filteredPodcasts?.map((podcast) => (
            <Link
              key={podcast.id.attributes["im:id"]}
              to={`/podcast/${podcast.id.attributes["im:id"]}`}
            >
              <PodcastListItem podcast={podcast} />
            </Link>
          ))
        )}
      </ListWrapper>
    </Wrapper>
  );
};
