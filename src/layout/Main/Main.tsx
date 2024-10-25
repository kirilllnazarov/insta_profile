import styled from "styled-components";

import { MainHeader } from "./MainHeader/MainHeader";
import { Profile } from "../../components/Profile/Profile";
import { Posts } from "../../components/Posts/Posts";

export const Main = () => {
  return (
    <StyledMain>
      <MainHeader />
      <Profile />
      <Posts/>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  outline: 1px solid red;
`;
