import styled from "styled-components";
import { TopBar } from "../../layout/TopBar/TopBar";
import { Main } from "../../layout/Main/Main";
import { MenuBar } from "../../layout/MenuBar/MenuBar";
import { theme } from "../../styles/Theme";

export const ProfileCard = () => {
  return (
    <StyledProfileCard>
      <TopBar />
      <Main />
      <MenuBar />
    </StyledProfileCard>
  );
};

const StyledProfileCard = styled.div`
  background-color: ${theme.colors.primary};
  width: 394px;
  max-width: 100%;
  height: 850px;
  margin: 0 auto;
  border-radius: 40px;
  position: relative;
  overflow: hidden;
`;


