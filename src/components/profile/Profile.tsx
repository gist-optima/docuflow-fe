import Icons from "../icons/Icons";
import ProfileImage from "../profileImage/ProfileImage";

interface ProfileProps {
  name?: string;
  description?: string;
  image?: string;
}

const Profile = ({ name, description, image }: ProfileProps) => {
  return (
    <div className={"grid grid-cols-[50px_1fr_25px] items-center gap-2"}>
      <ProfileImage src={image} width={50} height={50} />

      <div className={"flex flex-col"}>
        <p className={"text-xs font-medium"}>{name}</p>
        <p className={"text-[10px] text-gray-500"}>{description}</p>
      </div>

      <button>
        <Icons.Chat />
      </button>
    </div>
  );
};

export default Profile;
