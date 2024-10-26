import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Icon } from "../../components/Icon/Icon";

type Props = {};

export const TopBar = (props: Props) => {
  return (
    <StyledTopBar>
      <StyledIslandBar>
        <StyledSpan>9:41</StyledSpan>
        <div>
          <Icon iconId={"CellularConnection"} />
          <Icon iconId={"WiFi"} />
          <Icon iconId={"Battery"} />
        </div>
      </StyledIslandBar>
      <StyledDesktopLine />
    </StyledTopBar>
  );
};

const StyledTopBar = styled.section`
  width: 100%;
  height: 120px;
`;
const StyledIslandBar = styled.div`
  height: 54px;
  display: flex;
  justify-content: space-between;
  padding: 18px 28px 14px 44px;
`;

const StyledSpan = styled.span`
  font-size: 17px;
  font-weight: 600;
`;

const StyledDesktopLine = styled.div`
  border-radius: 10px 10px 0px 0px;
  /* background-color: ${theme.colors.secondary}; 
opacity: 0.35; */
  background-color: pink;
  width: 360px;
  height: 10px;
  margin: 0 auto; //?
`;
