import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0.5rem;
  height: 14rem;
  margin: 2rem 3rem 5rem 3rem;
  padding: 0 2rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  width: 18rem;
  img {
    position: relative;
    top: -4rem;
    left: 0;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }
  div {
    position: relative;
    top: -3rem;
    width: 100%;
    height: 40%;
  }
  h4 {
    font-weight: 400;
    color: grey;
  }
  h3 {
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  
`;

