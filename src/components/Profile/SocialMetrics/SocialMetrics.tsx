import React from "react";
import styled from "styled-components";
import { SocialMetric } from "./SocialMetric/SocialMetric";
import { FlexWrapper } from "../../FlexWrapper";

const metricData = [
  { iconId: "BellSimple", amount: "9 794", category: "Subscriptions" },
  { iconId: "Users", amount: "721,8K", category: "Subscribers" },
  { iconId: "Heart", amount: "14,4M", category: "Likes" },
];

export const SocialMetrics = () => {
  return (
    <StyledSocialMetrics>
          <FlexWrapper justify="center" >
      {metricData.map((m, i) => {
        return <SocialMetric key={i} iconId={m.iconId} amount={m.amount} category={m.category} />;
      })}
      </FlexWrapper>
    </StyledSocialMetrics>
  );
};

const StyledSocialMetrics = styled.div`
  padding: 20px 24px;
  
`;
