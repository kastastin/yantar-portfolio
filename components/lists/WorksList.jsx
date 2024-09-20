"use client";

import { useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";

const WorksList = ({ data }) => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const handleOpen = (id) => {
    setVideoId(id);
    setOpen(true);
  };

  return (
    <div className="space-y-5 sm:space-y-10">
      {data.map((item) => (
        <div
          key={item.title}
          className="transition-all-03 group relative cursor-pointer overflow-hidden border border-black hover:brightness-150"
          onClick={() => handleOpen(item.videoId)}
        >
          {!item?.isTitleHidden && (
            <span className="transition-all-05 absolute left-1/2 top-1/2 z-10 w-max -translate-x-1/2 -translate-y-1/2 px-2 py-1 text-center text-sm font-bold tracking-wider text-white group-hover:bg-black group-hover:text-base group-hover:invert">
              {item.title}
            </span>
          )}

          <Image
            src={item.imgSrc}
            alt={item.title}
            width={200}
            height={200}
            className="transition-all-05 h-auto w-full object-cover group-hover:scale-105 xs:h-[210px]"
            style={item?.imgStyle}
          />
        </div>
      ))}

      {videoId && (
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default WorksList;
