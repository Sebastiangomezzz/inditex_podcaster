import { Link } from "react-router-dom";
import { Wrapper } from "./Header.styles";
import { Title } from "./Header.styles";
import { StyledCircularProgress } from "./Header.styles";
//import { useSelector } from "react-redux";

export const Header = () => {
  //const loading = useSelector((state) => state.loading);
  
  return (
    <header>
      <Wrapper>
        <Link to="/">
          <Title>Podcaster</Title>
        </Link>
        {/* {loading.loading && <StyledCircularProgress />} */}
      </Wrapper>
    </header>
  );
};
