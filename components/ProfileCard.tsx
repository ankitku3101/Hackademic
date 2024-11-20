import Image from 'next/image';

interface ProfileCardProps {
  profileImg: string;
  name: string;
  designation: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profileImg, name, designation }) => {
  return (
    <div className='h-40 my-8'>
      <div className="relative overflow-hidden group rounded-xl p-4 transition-all duration-500 transform">
          <div className="flex flex-col items-center gap-4">
              <div className="relative w-36 h-36 group-hover:w-40 group-hover:h-40 transition-all duration-500">
                  <Image
                    src={profileImg}
                    alt={`${name}'s avatar`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
              </div>
              <div className="w-fit text-center transition-all transform duration-500">
                  <h1 className="text-gray-200 font-bold">{name}</h1>
                  <p className="text-gray-400">{designation}</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ProfileCard;
