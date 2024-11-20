import Image from 'next/image';

interface MemberCardProps {
  profileImg: string;
  name: string;
  designation: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ profileImg, name, designation}) => {
  return (
    <div className='h-40 my-8'>
      <div className="relative overflow-hidden group rounded-xl p-5 transition-all duration-500 transform">
          <div className="flex flex-col items-center gap-4 text-center">
              <div className="relative w-28 h-28 group-hover:w-32 group-hover:h-32 transition-all duration-500">
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
                  <h1 className="text-gray-200 font-bold">{name}</h1>
                  <p className="text-gray-400">{designation}</p>
              </div>
          </div>
      </div>
    </div>  
  );
};

export default MemberCard;
