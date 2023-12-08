import React, { useState, useRef, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  source
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);
const getVideoId = (url) => {
    const parts = url.split('=');
    
    // Get the last part (video ID)
    const videoId = parts[parts.length - 1];
    console.log(videoId);
    return videoId;
  }

  return (
    <div>
      {/* Video thumbnail */}
      <button
        className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-xl group"
        onClick={() => {
          setModalOpen(true);
        }}
        aria-label="Watch the video"
      >
        <img
          className="md:rounded-xl shadow-2xl transition-shadow duration-300 ease-in-out md:max-h-[280px] md:min-h-[270px]"
          src={thumb}
          width={thumbWidth}
          height={thumbHeight}
          priority
          alt={thumbAlt}
        />
        {/* Play icon */}
        <svg
          className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
        >
          <circle className="fill-white" cx="36" cy="36" r="36" fillOpacity=".8" />
          <path
            className="fill-indigo-500 drop-shadow-2xl"
            d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
          />
        </svg>
      </button>
      {/* End: Video thumbnail */}
      
      <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          {/* Modal backdrop */}
          <Transition.Child
            className="fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* End: Modal backdrop */}
          
          {/* Modal dialog */}
          <Transition.Child
            className="fixed inset-0 z-10 flex p-6"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <div className=" mx-auto h-full flex items-center">
              <Dialog.Panel className="w-full max-h-full rounded-3xl shadow-2xl  bg-black">
                {source ? (
                  <div>
                  <iframe
                    src={"https://www.youtube.com/embed/"+getVideoId(source)}
                    title="YouTube video"
                    frameBorder="0"
                    allowFullScreen
                    autoPlay
                    className='md:hidden block'
                  ></iframe>
                    <iframe
                      src={"https://www.youtube.com/embed/"+getVideoId(source)}
                      title="YouTube video"
                      frameBorder="0"
                      allowFullScreen
                      className='md:block hidden'
                      width={900}
                      height={500}
                       ></iframe>
                       </div>
                ) : (
                  <video ref={videoRef}  loop controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
