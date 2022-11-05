import { useState } from "react";
import styled from "styled-components";
import Header from "./Component/Header";

function App() {
  return (
    <MainGrid>
      <Header />
    </MainGrid>
  );
}

const MainGrid = styled.div`
  display: grid;
  grid-template-rows: 125px 50px;
  justify-items: center;
  height: 100vh;
`;

export default App;
