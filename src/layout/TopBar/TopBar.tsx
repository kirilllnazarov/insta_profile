import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Icon } from "../../components/Icon/Icon";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import Button from "../../components/Button";

type Props = {};

export const TopBar = (props: Props) => {
  return (
    <StyledTopBar>
      <StyledIslandBar>
        <FlexWrapper justify="space-between">
          <StyledSpan>9:41</StyledSpan>
          <div>
            <Icon iconId={"CellularConnection"} />
            <Icon iconId={"WiFi"} />
            <Icon iconId={"Battery"} />
          </div>
        </FlexWrapper>
      </StyledIslandBar>

      <StyledDesktopLine />
      <StyledMainHeader>
        <Container>
          <FlexWrapper justify="space-between">
            <Button color={theme.colors.accent} fontWeight="400">
              Cancel
            </Button>
            <StyledSpan>Bot</StyledSpan>
            <Button>
              <Icon iconId="CircleOutline" height="24" width="24" />
            </Button>
          </FlexWrapper>
          <StyledSpanTiny>bot</StyledSpanTiny>
        </Container>
      </StyledMainHeader>
    </StyledTopBar>
  );
};

const StyledTopBar = styled.section`
  width: 100%;
  height: 120px;
`;
const StyledIslandBar = styled.div`
  height: 54px;
  padding: 18px 28px 14px 44px;
`;

const StyledSpan = styled.span`
  font-size: 17px;
  font-weight: 600;
`;
const StyledSpanTiny = styled.span`
  display: block;
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  font-weight: 400;
  text-align: center;
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
const StyledMainHeader = styled.div`
  width: 100%;
  height: 56px;
  background-color: ${theme.colors.primary};
  /* background-color: #7c5fa0; */
  border-radius: 10px 10px 0px 0px;
  padding-top: 10px;
`;
