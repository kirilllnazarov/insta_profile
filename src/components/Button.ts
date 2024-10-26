import styled from "styled-components";

type Props = {
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  bg?: string;
  hoverBg?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
};

const Button = styled.button<Props>`
  border: none;
  text-align: center;
  width: ${(props) => props.width || "20px"};
  height: ${(props) => props.height || "10px"};
  padding: ${(props) => props.padding || "0"};
  font-size: ${(props) => props.fontSize || "15px"};
  font-weight: ${(props) => props.fontWeight || "600"};
  color: ${(props) => props.color || "#FCFCFC"};
  background-color: ${(props) => props.bg || "transparent"};
  border-radius: ${(props) => props.borderRadius || "8px"};
`;

export default Button;
