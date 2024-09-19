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
    <div className="space-y-5">
      {data.map((item) => (
        <div
          key={item.title}
          className="relative cursor-pointer"
          onClick={() => handleOpen(item.videoId)}
        >
          <span className="absolute left-1/2 top-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 text-center text-white">
            {item.title}
          </span>

          <Image
            src={item.imgSrc}
            alt={item.title}
            width={200}
            height={200}
            className="h-auto w-full border border-black"
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
