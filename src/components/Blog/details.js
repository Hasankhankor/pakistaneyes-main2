import Link from "next/link";
import Image from "next/image";

function Details({ imageSrc, description, date, category }) {
  return (
    <>


        <div className="flex flex-col gap-10 md:gap-4 container md:w-[60%] mx-auto my-6 md:mr-[11.5rem]">
          <div className="flex justify-between">
            <p className="text-sm mb-2 mx-2">{date}</p>
            <div className="bg-blue-600 text-white w-fit rounded-lg px-4">
              {category}
            </div>
          </div>
          <div>
            <Image
              src={imageSrc}
              width={600}
              height={600}
              className="w-full rounded-lg"
              alt="Image"
            />
          </div>
          <div>
  <p className="text-lg md:text-xl text-black">
    {description.length > 100 ? `${description.substring(0, 100)}...` : description}
  </p>
</div>
        </div>
        <div className="flex flex-col gap-10 container md:w-[60%] mx-auto my-6 md:mr-[11.5rem]">
          <div>
            <Image
              src={imageSrc}
              width={600}
              height={600}
              className="w-full rounded-lg"
              alt="Image"
            />
          </div>
          <div>
  <p className="text-lg md:text-xl text-black">
    {description.length > 100 ? `${description.substring(0, 100)}...` : description}
  </p>
</div>
        </div>

    </>
  );
}

export default Details;
