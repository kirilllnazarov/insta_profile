import iconSprite from "../../assets/images/icon-sprite.svg";

type Props = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon = ({ iconId, width, height, viewBox }: Props) => {
  return (
    <svg
      width={width || "30"}
      height={height || "30"}
      viewBox={viewBox || "0 0 30 30"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconSprite}#${iconId}`} />
    </svg>
  );
};
