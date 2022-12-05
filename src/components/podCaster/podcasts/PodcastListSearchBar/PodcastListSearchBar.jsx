import { useEffect, useState } from "react";
//styled components
import { Wrapper } from "./PodcastListSearchBar.styles";
//material ui
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";

export const PodcastListSearchBar = ({
  data,
  setFilteredPodcasts,
  filteredPodcasts,
}) => {
  const [valueToSearch, setValueToSearch] = useState();

  useEffect(() => {
    setFilteredPodcasts(data?.feed?.entry);
  }, [data, setFilteredPodcasts]);

  const handleChange = ({ target }) => {
    if (target.value.length <= 2) {
      return setFilteredPodcasts(data?.feed?.entry);
    } else setValueToSearch(target.value);
  };
  useEffect(() => {
    if (valueToSearch && valueToSearch !== "") {
      const filteredResults = data?.feed?.entry.filter(
        (product) =>
          product["im:name"].label
            .toLowerCase()
            .includes(valueToSearch.toLowerCase().trim()) ||
          product["im:artist"].label
            .toLowerCase()
            .includes(valueToSearch.toLowerCase().trim())
      );
      setFilteredPodcasts(filteredResults);
    }
  }, [valueToSearch, data, setFilteredPodcasts]);

  return (
    <Wrapper>
      <Badge
        badgeContent={filteredPodcasts?.length}
        color="primary"
        max={999}
      />
      <TextField
        variant="outlined"
        onChange={handleChange}
        type="text"
        placeholder="Filter podcasts..."
        underline="none"
      />
    </Wrapper>
  );
};
