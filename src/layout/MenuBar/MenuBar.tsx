import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { MenuBarItem } from "./MenuBarItem/MenuBarItem";
import { FlexWrapper } from "../../components/FlexWrapper";

const navData = [
  { iconId: "House" },
  { iconId: "MagnifyingGlass" },
  { iconId: "PlusCircle" },
  { iconId: "ChatCenteredText" },
  { iconId: "UserCircle" },
];

export const MenuBar = () => {
  return (
    <StyledMenuBar>
      <StyledMenuList>
        <FlexWrapper justify="space-between">
          {navData.map((navItem, i) => {
            return <MenuBarItem key={i} iconId={navItem.iconId} />;
          })}
        </FlexWrapper>
      </StyledMenuList>
    </StyledMenuBar>
  );
};

const StyledMenuBar = styled.section`
  background-color: ${theme.colors.primary};
  height: 82px;
  padding: 0 8px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;


`;
const StyledMenuList = styled.div`
  height: 56px;
  position: relative;

&::after {
  content: '';
  display: block;
  width: 134px;
  height: 5px;
  position: absolute;
  background-color: ${theme.colors.primaryFont};
  border-radius: 100px;
  left: 50%;
  transform: translateX(-50%);
  bottom: -14px
}
`;
