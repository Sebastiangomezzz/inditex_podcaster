import { useLocation, Link } from "react-router-dom";
//Material-UI components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//Styled components
import { Wrapper } from "./PodcastDetailCard.styles";

export const PodcastDetailCard = ({ podcast, podcastId }) => {
  //get the location to use it to decide if the card should be a link or not
  const location = useLocation();
  const isEpisode = location.pathname.includes("episode");

  return (
    <Wrapper>
      <Card sx={{ width: "18rem" }}>
        <CardContent sx={{ padding: "1rem" }}>
          <Link
            to={isEpisode ? `/podcast/${podcastId}` : ""}
            style={{ cursor: isEpisode ? "pointer" : "auto" }}
          >
            <CardMedia
              sx={{ borderRadius: 1 }}
              component="img"
              height="240"
              image={podcast["im:image"][2].label}
              alt={podcast["im:name"].label}
            />
            <hr />
            <h3>{podcast["im:name"].label.toUpperCase()}</h3>
          </Link>
          <h4>by {podcast["im:artist"].label}</h4>
          <hr />
          <h4>Description:</h4>
          <p>{podcast["summary"].label}</p>
        </CardContent>
      </Card>
    </Wrapper>
  );
};
