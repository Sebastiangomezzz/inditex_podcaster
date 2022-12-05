import styled from "styled-components";

export const Wrapper = styled.div`
  div {
    &:first-child {
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      a{
        color: black;
      }
    }
  }
  img{
    border-radius: 0.5rem;
  }
  hr {
    color: rgba(0, 0, 0, 0.1);
    margin-top: 1rem;
  }
`;
