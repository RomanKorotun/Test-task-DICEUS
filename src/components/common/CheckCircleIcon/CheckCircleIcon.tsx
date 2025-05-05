import { FaCheck } from "react-icons/fa6";

interface IIconWrapperProps {
  iconSize: number;
  wrapperWidth: number;
  wrapperHeight: number;
  iconColor: string;
}

export const CheckCircleIcon = ({
  iconSize,
  wrapperWidth,
  wrapperHeight,
  iconColor,
}: IIconWrapperProps) => {
  return (
    <div
      style={{
        width: wrapperWidth,
        height: wrapperHeight,
        border: `1px solid ${iconColor}`,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <FaCheck color={iconColor} size={iconSize} />
    </div>
  );
};
