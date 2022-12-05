import React from "react";
import { Wrapper, Content } from "./Layout.styles";

export const Layout = ({ children, header }) => {
  return (
    <Wrapper>
        <header>{header}</header>
        <main>
          <Content>{children}</Content>
        </main>
    </Wrapper>
  );
};
