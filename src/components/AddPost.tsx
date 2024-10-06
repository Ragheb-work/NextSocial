import Image from "next/image";

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* Avatar */}
      <Image
        src={
          "https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        width={48}
        height={48}
        alt=""
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* Post */}
      <div className=" flex-1">
        {/* Text Input */}
        <div className="flex gap-4">
          <textarea
            placeholder="what's on your mind ?"
            className="bg-slate-100 rounded-lg flex-1 p-2"
          ></textarea>
          <Image
            src={"/emoji.png"}
            width={20}
            height={20}
            alt=""
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/* Post Option */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/addImage.png"} width={20} height={20} alt="" />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/addVideo.png"} width={20} height={20} alt="" />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/poll.png"} width={20} height={20} alt="" />
            poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/addEvent.png"} width={20} height={20} alt="" />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
