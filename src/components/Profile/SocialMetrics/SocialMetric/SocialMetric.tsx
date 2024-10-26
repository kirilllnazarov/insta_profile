import React from "react";
import styled from "styled-components";
import { Icon } from "../../../Icon/Icon";
import { FlexWrapper } from "../../../FlexWrapper";
import { theme } from "../../../../styles/Theme";

type Props = {
  iconId: string;
  amount: string;
  category: string;
};

export const SocialMetric = ({ iconId, amount, category }: Props) => {
  return (
    <StyledSocialMetric>
      <FlexWrapper wrap="wrap" justify="center" gap="6px" align="center">
        <Icon iconId={iconId} viewBox=" 0 0 20 20" width="20" height="20" />
        <StyledAmount>{amount}</StyledAmount>
        <StyledCategory>{category}</StyledCategory>
      </FlexWrapper>
    </StyledSocialMetric>
  );
};

const StyledSocialMetric = styled.div`
width: 33%;
`;
const StyledAmount = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const StyledCategory = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: ${theme.colors.secondaryFont}
`;
