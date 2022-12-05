import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  margin: 1rem;
  height: 5rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #688db4;
`;
export const StyledCircularProgress = styled(CircularProgress)`
  color: #688db4 !important;
`;
