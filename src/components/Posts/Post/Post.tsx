import styled from "styled-components";
import { Icon } from "../../Icon/Icon";
import { FlexWrapper } from "../../FlexWrapper";
type Props = {
  pic: string;
  alt: string;
};
export const Post = ({ pic, alt }: Props) => {
  return (
    <StyledPost>
      <StyledPostImg src={pic} alt={alt} />
      <StyledPostPin>
        <Icon iconId="PushPin" height="18" width="18" viewBox="0 0 18 18" />
      </StyledPostPin>
      <StyledPostViews>
        <FlexWrapper align="center" gap="4px">
          <Icon iconId="Eye" height="18" width="18" viewBox="0 0 18 18" />
          <span>13,5M</span>
        </FlexWrapper>
      </StyledPostViews>
    </StyledPost>
  );
};

const StyledPostPin = styled.div`
  position: absolute;
  top: 6px;
  left: 6px;
`;

const StyledPost = styled.div`
  position: relative;
  &:nth-child(n + 4) ${StyledPostPin} {
    visibility: hidden;
  }
`;

const StyledPostImg = styled.img`
  width: 130px;
  height: 174px;
  object-fit: cover;
`;

const StyledPostViews = styled.div`
  position: absolute;
  bottom: 6px;
  left: 6px;
  font-weight: 600;
`;
