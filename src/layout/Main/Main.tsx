import styled from "styled-components";
import { Profile } from "../../components/Profile/Profile";
import { Posts } from "../../components/Posts/Posts";

export const Main = () => {
  return (
    <StyledMain>
      <Profile />
      <Posts/>
    </StyledMain>
  );
};

const StyledMain = styled.section`

  
`;
