import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* Top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href={"/"} className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/* Bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Mark Peek</span>
          <span className="text-sm">@mark</span>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem
          dolorem veritatis.
        </p>
        <div className="flex items-center gap-2">
          <Image src={"/map.png"} alt="" width={16} height={16} className="" />
          <span className="">
            Living in <b>Tunisia</b>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Image src={"/school.png"} alt="" width={16} height={16} />
          <span className="">
            Went to <b>Bin High School</b>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Image src={"/work.png"} alt="" width={16} height={16} />
          <span className="">
            Works at <b>Apple Inc.</b>
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Image src={"/link.png"} alt="" width={16} height={16} />
            <Link href={"/"} className="text-blue-500 font-medium">
              Mark
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <Image src={"/date.png"} alt="" width={16} height={16} />
            <span className="">Joined September 2020</span>
          </div>
        </div>

        <button className=" bg-blue-500 text-white text-sm rounded-md p-2">
          Follow
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
