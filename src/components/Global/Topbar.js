"use client";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Button from "./Button";
import Logo from "../../../public/Logo.jpeg"
import { useEffect, useState } from "react";
 export default function Topbar() {
const [date,setDate]=useState()
const [days,setdays]=useState()

useEffect(()=>{
  let today = new Date(),
            dates = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  setDate(dates)
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
setdays(day);

},[])



  return (
    <>

      <nav className="hidden md:bg-white md:shadow-lg md:mb-5 md:block">
        <div className="flex justify-between px-4">
          <ul className="flex gap-8">
            <li className="items-middle pt-2 text-gray-500">
              15<sup>c</sup>{" "}
            </li>
            <li className="item-middle pt-2 text-gray-500">
            // {date} {days}
            </li>
            <li className="bg-cyan-300 text-white py-2 px-3">Breaking News</li>


          </ul>
          <ul className="flex gap-3 pt-3 text-gray-500">
          <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=61553687182208&mibextid=ZbWKwL"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      <div class="">
                        <img
                          class="bg-blue-600 p-1"
                          alt="Frame"
                          src="https://cdn.animaapp.com/projects/650436ea563939b650df9455/releases/650437a496d31c08b0a413c5/img/frame-30.svg"
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href=" https://x.com/PakistanEyes_pk?t=G6rnWIo-M1-_XqxiUHBY-g&s=08"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      <div class="twitter-3">
                        <img
                          class=" bg-cyan-400 p-1"
                          alt="Frame"
                          src="https://cdn.animaapp.com/projects/650436ea563939b650df9455/releases/650437a496d31c08b0a413c5/img/frame-31.svg"
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      <div class="instagram-3">
                        <img
                          class="bg-pink-600 p-1"
                          alt="Frame"
                          src="https://cdn.animaapp.com/projects/650436ea563939b650df9455/releases/650437a496d31c08b0a413c5/img/frame-32.svg"
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.youtube.com/@pakistaneyesnetwork"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      <div class="youtube-3">
                        <img
                          class="bg-red-600 p-1"
                          alt="Frame"
                          src="https://cdn.animaapp.com/projects/650436ea563939b650df9455/releases/650437a496d31c08b0a413c5/img/frame-33.svg"
                        />
                      </div>
                    </a>
                  </li>

          </ul>
        </div>
      </nav>
      <div className="flex flex-col md:flex-row justify-between container mx-auto md:my-6 md:pt-3">
        <div className="md:w-1/2 hidden md:block">
        <Image src={Logo} width={140} height={100} />
        </div>
        <div className="md:w-1/2 bg-[url('/banners/banner1.jpg')] bg-no-repeat bg-center bg-cover md:w-4/5 max-h-32 md:block hidden">
          <div className="flex justify-between p-4 items-center">
          <div className="text-center sm:text-right mt-4">
              <Button name="ابھی خریدیں" color="bg-blue-400" />
            </div>
            <div className="text-white">
              <p>سب سے زیادہ فروخت ہونے والا بلاگ اور میگزین </p>
              <p>تھیم آف آل ٹائم</p>
              <p className="text-red-800 font-bold">تبدیلی کا تجربہ کریں!</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

