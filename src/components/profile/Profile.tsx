import Icons from "../icons/Icons";
import ProfileImage from "../profileImage/ProfileImage";

interface ProfileProps {
  name?: string;
  description?: string;
  image?: string;
  variant?: "people" | "organization";
}

const Profile = ({
  name,
  description,
  image,
  variant = "people",
}: ProfileProps) => {
  const isPeople = variant === "people";

  return (
    <div
      className={
        isPeople
          ? "grid grid-cols-[50px_1fr_25px] items-center gap-2"
          : "grid grid-cols-[80px_1fr] items-center gap-4"
      }
    >
      <ProfileImage src={image} />

      <div className={"flex flex-col gap-1"}>
        <p className={isPeople ? "text-xs font-medium" : "text-base font-bold"}>
          {name}
        </p>
        <p
          className={
            isPeople ? "text-[10px] text-gray-500" : "text-xs text-gray-500"
          }
        >
          {description}
        </p>
      </div>

      {isPeople && (
        <button>
          <Icons.Chat />
        </button>
      )}
    </div>
  );
};

export default Profile;
