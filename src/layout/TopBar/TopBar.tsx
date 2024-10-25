import styled from "styled-components";


type Props = {}

export const TopBar = (props: Props) => {
  return (
    <StyledTopBar>
        <StyledIslandBar>island bar</StyledIslandBar>
        <StyledDesktopLine>poloska</StyledDesktopLine>
    </StyledTopBar>
  )
}

const StyledTopBar= styled.section`
  width: 100%;
  height: 120px;
  background-color: aqua;
 
`;
const StyledIslandBar= styled.div`
outline: 1px solid green;
`

const StyledDesktopLine= styled.div`
outline: 1px solid red;
`

