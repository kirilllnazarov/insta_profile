import { Post } from "./Post/Post";
import shrimp from "../../assets/images/shrimp.webp";
import steak from "../../assets/images/steak.webp";
import adidas from "../../assets/images/adidas.webp";
import starbacks from "../../assets/images/starbaks.webp";
import night from "../../assets/images/citynights.webp";
import burger from "../../assets/images/burger.webp";
import { FlexWrapper } from "../FlexWrapper";

const imgData = [
  {
    sourse: shrimp,
    description: "shrimp",
  },
  {
    sourse: steak,
    description: "steak",
  },
  {
    sourse: adidas,
    description: "adidas",
  },
  {
    sourse: starbacks,
    description: "starbacks",
  },
  {
    sourse: night,
    description: "night",
  },
  { sourse: burger, description: "burger" },
];

export const Posts = () => {
  return (
    <div>
      <FlexWrapper wrap="wrap" gap="2px">
        {imgData.map((image, i) => {
          return <Post key={i} pic={image.sourse} alt={image.description} />;
        })}
      </FlexWrapper>
    </div>
  );
};
