import Image from "next/image"
import StayConnectCard from "./StayConnectCard"


const facebook = "/assets/Facebook.png"
const instagram = "/assets/instagram.png"
const youtube = "/assets/youtube.png"
const twitter = "/assets/twitter.png"
const Be = "/assets/Be.png"
const Social = "/assets/Social.png"

const StayConnected = () => {
  return (
    <div className="  text-black stay-connected mt-[10px] p-1 index">
          <div className="text-wrapper-48  mb-2">جڑے رہیے</div>
          <div className="line-7">
            <Image
              className="line-4 "
              width={50}
              height={50}
              alt="Line"
              src="https://cdn.animaapp.com/projects/650436ea563939b650df9455/releases/650437a496d31c08b0a413c5/img/line-5.svg"
            />
          </div>
            <div className="grid grid-cols-2 gap-4 p-0  ">
            <div  > <StayConnectCard bkg="blue-500" image={facebook} number="۱۰۰۰" /></div>
            <div  > <StayConnectCard bkg="pink-500" image={instagram} number="۱۰۰۰" /></div>
            <div  > <StayConnectCard bkg="red-500" image={youtube} number="۱۰۰۰" /></div>
            <div  > <StayConnectCard bkg="blue-500" image={twitter} number="۱۰۰۰" /></div>
            <div  > <StayConnectCard bkg="blue-500" image={Be} number="۱۰۰۰" /></div>
            <div  > <StayConnectCard bkg="pink-500" image={Social} number="۱۰۰۰" /></div>
            </div>
    </div>
  )
}

export default StayConnected
