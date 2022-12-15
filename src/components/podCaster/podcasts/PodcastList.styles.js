import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;
export const ListWrapper = styled.div`
  width: 100vw;
  min-height: 50vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8rem;
  a {
    color: #000;
  }
`;
export const SearchbarWrapper = styled.div`
  position: absolute;
  top: 8rem;
  right: 2rem;
`;

export const SearchBarInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 16.5rem;
  align-content: center;
  align-items: center;
  input {
    padding: 0.7rem 1rem;
    font-family: "Inter Tight", sans-serif;
  }
`;