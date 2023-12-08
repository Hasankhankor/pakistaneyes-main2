import Image from "next/image";
import Link from "next/link";
import Button from "../Global/Button";

const Banner = () => {
  return (

      <div className="pt-8 overlap-35 hidden md:block">
        <div className="flex justify-between p-4 items-center text-wrapper-73 leading-loose">
        <div className="text-center sm:text-right mt-4">
            <Button name="ابھی خریدیں" color="bg-red-500" />


          </div>
          <div className="text-white">
            <p>
            سب سے زیادہ فروخت ہونے والا بلاگ اور میگزین
            </p>
            <p> تھیم آف آل ٹائم</p>
            <p className="text-red-800 font-bold">تبدیلی کا تجربہ کریں!</p>
          </div>

        </div>
      </div>
  );
};
export default Banner;
