import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/pages/api/api_config";
import ModalVideo from "../ModalVideo";

const CategoryImg1 = "/blog/blog3.jpg";
const VideoIcon = "/assets/PlayvideoButton.png";

const VideoCard = ({ key, thumbnail, date, video, title, url, category }) => {
  console.log("isYouTube:", url );
  return (
      <div className="video-4 w-fit md:w-72 h-400 sm:min-w-[360px] relative mb-5">
        <ModalVideo
          thumb={thumbnail}
          thumbWidth={370}
          thumbHeight={350}
          thumbAlt={"thumbnail"}
          video={video}
          source={url}
        />
        <div className="md:max-w-[85%]">
          <p className="craig-bator-dec-13">
            <span className="text-wrapper-44">&nbsp;</span>
            <span className="md:text-wrapper-45 text-xs text-gray-500">
              {date}
            </span>
          </p>
          <p className="md:text-wrapper-49 text-xs md:text-2xl md:font-bold ">
            {title}
          </p>
        </div>
      </div>
  );
};

export default VideoCard;
