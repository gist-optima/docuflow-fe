import { CSSProperties } from "react";

interface ProfileImageProps {}

const ProfileImage = ({
  className,
  ...props
}: ProfileImageProps & React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img className={`overflow-hidden rounded-full ${className}`} {...props} />
  );
};

export default ProfileImage;
