import styled from "styled-components";
import { SocialMetrics } from "./SocialMetrics/SocialMetrics";

export const Profile = () => {
  return (
    <StyledProfile>
      <div>
        <div></div>
        <div></div>
      </div>
      <SocialMetrics/>
      <div>btn</div>
      <div>text</div>
    </StyledProfile>
  );
};
const StyledProfile = styled.div`
background-color: #4f7b7b;
`;
