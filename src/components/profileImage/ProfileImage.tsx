import { CSSProperties } from "react";
import { mulberry32 } from "src/utils/utils";

interface ProfileImageProps {
  initial: string;
  className?: string;
  style?: CSSProperties;
}

const ProfileImage = ({
  initial,
  className,
  style,
  ...props
}: ProfileImageProps & React.ImgHTMLAttributes<HTMLImageElement>) => {
  const circleStyle: CSSProperties = {
    aspectRatio: 1 / 1,
    borderRadius: "50%",
    backgroundColor:
      "#" +
      Math.round(mulberry32(initial.charCodeAt(0))() * 0xffffff).toString(16),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...style,
  };

  const initialsStyle: CSSProperties = {
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
  };

  return (
    <div className={className} style={circleStyle}>
      <span style={initialsStyle}>{initial}</span>
    </div>
  );
};

export default ProfileImage;
