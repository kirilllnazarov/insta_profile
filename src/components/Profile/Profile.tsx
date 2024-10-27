import styled from "styled-components";
import { SocialMetrics } from "./SocialMetrics/SocialMetrics";
import { Container } from "../Container";
import photo from "../../assets/images/person_photo.webp";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme";
import Button from "../Button";
import { Icon } from "../Icon/Icon";

export const Profile = () => {
  return (
    <StyledProfile>
      <Container>
        <StyledProfileInfo>
          <Container>
            <FlexWrapper direction="column" justify="center" align="center">
              <StyledProfilePhoto src={photo} alt="Dmitry Mentor" />
              <StyledProfileTitle>Dmitriy Mentor</StyledProfileTitle>
              <StyledProfileNickname>@mentor</StyledProfileNickname>
            </FlexWrapper>
            <StyledProfileShareArrow>
              <Icon iconId="ShareFat" width="24" height="24" viewBox="0 0 24 24" />
            </StyledProfileShareArrow>
          </Container>
        </StyledProfileInfo>
        <SocialMetrics />
        <Container>
          <FlexWrapper gap="6px">
            <Button bg={theme.colors.accent} width="280px" height="44px">
              Subscribe
            </Button>
            <Button bg="#2E2E2E" width="44px" height="44px">
              <Icon iconId="CaretDown" viewBox="0 0 20 20" height="20" width="20" />
            </Button>
          </FlexWrapper>
        </Container>
        <StyledProfileText>Where to grow your business as a photographer: site or social media?</StyledProfileText>
      </Container>
    </StyledProfile>
  );
};
const StyledProfile = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 16px;
`;

const StyledProfileInfo = styled.div`
  position: relative;
`;

const StyledProfilePhoto = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50px;
`;

const StyledProfileTitle = styled.span`
  padding: 16px 0 4px;
`;
const StyledProfileNickname = styled.span`
  color: ${theme.colors.secondaryFont};
`;

const StyledProfileShareArrow = styled.div`
  width: 40px;
  height: 40px;
  padding: 8px;
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledProfileText = styled.p`
  text-align: center;
  color: ${theme.colors.secondaryFont};
  padding: 20px 32px 32px;
`;
