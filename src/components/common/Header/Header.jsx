import { Link } from "react-router-dom";
import { Wrapper } from "./Header.styles";
import { Title } from "./Header.styles";
import { StyledCircularProgress } from "./Header.styles";
import { useContext } from "react";
import { LoadingContext } from "../../../context/LoadingContext";

export const Header = () => {
  const { isContextLoading } = useContext(LoadingContext);
  return (
    <header>
      <Wrapper>
        <Link to="/">
          <Title>Podcaster</Title>
        </Link>
        {/* TODO implement loading with context API */}
        {isContextLoading && <StyledCircularProgress />}
      </Wrapper>
    </header>
  );
};
