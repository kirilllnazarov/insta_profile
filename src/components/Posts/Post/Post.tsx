import styled from "styled-components";
type Props = {
  pic: string;
  alt: string;
};
export const Post = ({ pic, alt }: Props) => {
  return <StyledPost src={pic} alt={alt} />;
};

const StyledPost = styled.img`

width: 130px;

  height: 174px;
  object-fit: cover;
`;
