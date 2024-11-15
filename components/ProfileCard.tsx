import Image from 'next/image';

interface ProfileCardProps {
  profileImg: string;
  name: string;
  designation: string;
  emailId: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profileImg, name, designation, emailId }) => {
  return (
    <div className="bg-gray-100 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-4 transition-all duration-500 transform">
        <div className="flex items-center gap-4">
            <div className="relative w-32 h-32 group-hover:w-36 group-hover:h-36 transition-all duration-500">
                <Image
                src={profileImg}
                alt={`${name}'s avatar`}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                priority
                />
            </div>
            <div className="w-fit transition-all transform duration-500">
                <h1 className="text-gray-600 dark:text-gray-200 font-bold">{name}</h1>
                <p className="text-gray-400">{designation}</p>
                <a
                href={`mailto:${emailId}`}
                className="text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all duration-500"
                >
                {emailId}
                </a>
            </div>
        </div>
    </div>
  );
};

export default ProfileCard;
