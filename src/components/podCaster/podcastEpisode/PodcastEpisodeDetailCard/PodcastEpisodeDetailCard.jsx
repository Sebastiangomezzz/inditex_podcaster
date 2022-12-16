//Material-UI components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//linkify
import Linkify from "linkify-react";

export const PodcastEpisodeDetailCard = ({ currentTrack }) => {
  //remove the three dots and the three hyphens anywhere in the currentTrack.description
  const description = currentTrack?.description.replace(
    /(\.{3}|-{3})|-{2}/g,
    ""
  );
  return (
    <Card
      sx={{
        width: "100%",
        minHeight: "20rem",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
        padding: "1rem",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3>{currentTrack?.trackName?.toUpperCase()}</h3>
        {currentTrack?.shortDescription ? (
          <>
            <h4>{currentTrack?.shortDescription}</h4>
            <br />
          </>
        ) : null}
        <Linkify
          as="p"
          options={{
            target: "_blank",
            nl2br: true,
            render: {
              url: ({ attributes, content }) => {
                return (
                    <a {...attributes} style={{ color: "#688db4" }}>
                      {content}
                    </a>
                );
              },
            },
          }}
        >
          {description}
        </Linkify>
        <CardMedia
          data-testid="audioPlayer"
          sx={{
            marginTop: "3rem",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
            borderRadius: "1.9rem",
          }}
          component="audio"
          controls
          src={currentTrack?.episodeUrl}
          alt={currentTrack?.episodeName}
        />
      </CardContent>
    </Card>
  );
};
