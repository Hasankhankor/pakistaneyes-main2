import Link from "next/link";
import Image from "next/image";
import Banner from "./banner";
const galleryImg = [
  "/gallery/gallery1.jpg",
  "/gallery/gallery2.jpg",
  "/gallery/gallery3.jpg",
  "/gallery/gallery4.jpg",
];
const Gallery = () => {
  return (
    <>
   <div className="index absolute left-[37%] md:left-[48%] md:mt-52">
        <div className="overlap-group-29">
          <img
            className="frame-11"
            alt="Frame"
            src="https://cdn.animaapp.com/projects/650436ea563939b650df9455/releases/650437a496d31c08b0a413c5/img/frame-29.svg"
          />
          <div className="text-wrapper-85">Follow us</div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-32">
        {galleryImg.map((item, index) => (
          <div key={index} className="m-2">
            <Image
              src={item}
              width={500}
              height={500}
              className="max-h-[19rem]"
              alt="Gallery"
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Gallery;
