"use client";
import { ModalStore } from "@/app/hooks/useModal";
import Modal from "./Modal";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getVideo } from "@/app/hooks/helper";
import { Like, Views } from "../Icons";
import { handleImagesFetch } from "@/app/hooks/firebaseFunctions";

type InfoType = {
  title: string;
  description: string;
  views: string;
  likes: string;
};

const ViewModal = () => {
  const { isOpen, onClose, id } = ModalStore();
  const [info, setInfo] = useState<InfoType | null>(null);
  const [images, setImages] = useState([]);

  async function fetchVideoInfo(id: string) {
    const data = await getVideo(id);
    const imagesData = await handleImagesFetch(id);

    if (data) setInfo(data);

    if (imagesData) {
      const data = await Promise.allSettled(imagesData)
        //@ts-ignore
        .then((res) => res.map((res) => res.value))
        .catch((error) => console.log(error));

      //@ts-ignore
      setImages(data);
    }
  }

  useEffect(() => {
    fetchVideoInfo(id);
  }, [id]);

  const body = (
    <div className="max-h-[350px] overflow-y-scroll space-y-5">
      {info && (
        <div className="max-h-full">
          <div className="flex justify-start items-center gap-4 mb-2">
            <span className="flex justify-center items-center gap-2 text-sm">
              <Views className="text-primary/70 w-6 h-6" />
              {info.views}
            </span>
            <span className="flex justify-center items-center gap-2 text-sm">
              <Like className="text-primary/70 w-6 h-6" />
              {info.likes}
            </span>
          </div>

          <h6 className="text-md font-medium mb-2 relative before:absolute before:-bottom-0 before:left-0 before:w-[13%] before:h-[1px] before:bg-primary/40">
            About this...
          </h6>
          <p className=" text-xs leading-4 first-letter:uppercase">
            {info.description
              ? info.description
              : "I am giving a detailed explanation in the video, through which you can understand it thoroughly. Click on 'Watch' now!"}
          </p>
        </div>
      )}

      {images.length !== 0 && (
        <div className="relative max-h-[350px]">
          <h6 className="mb-5 text-md font-medium relative before:absolute before:-bottom-0 before:left-0 before:w-[28%] before:h-[1px] before:bg-primary/40">
            Some helpful Resource Diagrams
          </h6>
          <div className="rounded-md flex justify-start items-center gap-2 overflow-x-scroll">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="some text"
                height={100}
                width={500}
                className="w-fit max-h-[250px] rounded-md object-contain cursor-default"
                priority
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );

  if (info)
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={info.title}
        body={body}
        actionLabel="Watch"
        secondaryActionLabel="Close"
        id={id}
      />
    );
};

export default ViewModal;
