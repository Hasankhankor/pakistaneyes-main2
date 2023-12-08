import Link from "next/link";
import Image from "next/image";

function BlogPost({imageSrc,title,description,date,category}) {
   return (
    <>
    <div className="flex flex-col md:flex-row gap-10 items-center container md:w-[76%] mx-auto my-16 md:mr-[11.5rem]">
    <div className="md:max-w-[33%] md:w-full">
      <img src={imageSrc} className="md:w-full md:min-w-[60%] rounded-lg" alt="Image" />
    </div>
    <div>
    <div className="flex flex-row justify-around">
      <p className="text-sm mb-2 mx-2 bg-blue-800 w-fit px-4 rounded-lg text-white">{category}</p>
      <p className="text-sm mb-2 mx-2">{date}</p>
    </div>
    <p className="text-xl md:text-2xl font-bold my-6 hover:text-blue-400 transition-all 2s ease">{title}</p>
   <p className="text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: description.substring(0, 200) + "..." }}></p>
    </div>
    </div>
    </>
  );
}

export default BlogPost;
