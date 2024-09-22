"use client";
import { ModalStore } from "@/app/hooks/useModal";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import { getVideo } from "@/app/hooks/helper";
import { Download, Like, Views } from "../Icons";
import { handleResourcesFetch } from "@/app/hooks/firebaseFunctions";
import Link from "next/link";

type InfoType = {
  title: string;
  description: string;
  views: string;
  likes: string;
};

type ItemDataType = {
  name: string;
  downloadLink: string;
  metadata: any;
};

const ViewModal = () => {
  const { isOpen, onClose, id } = ModalStore();
  const [info, setInfo] = useState<InfoType | null>(null);
  const [resources, setResources] = useState<ItemDataType[]>([]);

  async function fetchVideoInfo(id: string) {
    const data = await getVideo(id);
    const resourcesData = await handleResourcesFetch(id);

    if (data) setInfo(data);

    if (resourcesData) {
      const data = await Promise.allSettled(resourcesData)
        //@ts-ignore
        .then((res) => res.map((res) => res.value))
        .catch((error) => console.log(error));

      //@ts-ignore
      setResources(data);
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
            {info.title}
          </h6>
          <p className=" text-xs leading-4 first-letter:uppercase">
            {info.description
              ? info.description
              : "I am giving a detailed explanation in the video, through which you can understand it thoroughly. Click on 'Watch' now!"}
          </p>
        </div>
      )}

      <div className="relative max-h-[350px]">
        <h6 className="mb-5 text-md font-medium relative">
          Resources for download
        </h6>
        {resources.length !== 0 ? (
          <div className="rounded-md flex flex-col md:flex-row justify-start items-center gap-2 flex-wrap">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.downloadLink}
                download={true}
                className="w-full md:w-fit group"
              >
                <button className="w-full flex justify-center items-center gap-2 border bg-transparent border-dark/20 rounded-md px-5 py-2 text-xs text-dark font-semibold group-hover:bg-dark group-hover:text-white">
                  <Download width={20} height={20} />
                  {resource.metadata.displayFileName}
                </button>
              </Link>
            ))}
          </div>
        ) : (
          <div className="">
            <p className="text-sm text-center text-dark">
              &quot;No resources available, you can still watch the video or
              contact me to upload some resources for this video.&quot;
            </p>
          </div>
        )}
      </div>
    </div>
  );

  if (info)
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={"Resources & Info"}
        body={body}
        actionLabel="Watch"
        secondaryActionLabel="Close"
        id={id}
      />
    );
};

export default ViewModal;
