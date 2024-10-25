import styled from "styled-components";
import { TopBar } from "../../layout/TopBar/TopBar";
import { Main } from "../../layout/Main/Main";
import { MenuBar } from "../../layout/MenuBar/MenuBar";

export const ProfileCard = () => {
  return (

    <StyledProfileCard>
      <TopBar />
      <Main/>
      <MenuBar/>
    </StyledProfileCard>
  );
};

const StyledProfileCard = styled.div`
  /* background-color: black; */
  width: 390px;
  max-width: 100%;
  height: 850px;
  margin: 0 auto;
  border: 2px solid black;
`;

const StyledDesktopLine= styled.div`
outline: 1px solid red;
`