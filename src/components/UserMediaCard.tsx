import Image from "next/image";
import Link from "next/link";

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* Top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href={"/"} className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/* Bottom */}

      <div className="flex flex-wrap justify-between gap-4">
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/1149019/pexels-photo-1149019.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/207725/pexels-photo-207725.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/1149019/pexels-photo-1149019.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/207725/pexels-photo-207725.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;
