"use client";

import { useEffect, useState } from "react";
import { CloseIcon, PlayButton } from "../Icons";
import Link from "next/link";

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  title: string;
  body: React.ReactElement;
  action?: () => void;
  actionLabel?: string;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  disabled?: boolean;
  id: string;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  body,
  action,
  actionLabel,
  secondaryAction,
  secondaryActionLabel,
  disabled,
  id,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    // TODO: Uncomment this line
    // if (disabled) return;

    setShowModal(false);

    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleAction = () => {
    // TODO: Uncomment this line
    // if (disabled) return;
    // Call the action;
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="
        flex
        justify-center
        items-center
        fixed
        inset-0
        overflow-x-hidden
        overflow-y-auto
        z-30
        outline-none
        focus:outline-none
        bg-dark/50
    "
      >
        <div
          className="
        relative
        w-[95vw]
        md:w-3/4
        lg:w-2/3
        xl:w-3/5
        my-6
        mx-auto
        h-full
        md:h-auto
        lg:h-auto
        "
        >
          {/* CONTENT */}
          <div
            className={`
                translate
                duration-300
                h-full
                ${showModal ? "translate-y-0" : "translate-y-full"}
                ${showModal ? "opacity-100" : "opacity-0"}
            `}
          >
            <div
              className="
            translate
            h-full
            lg:h-auto
            md:h-auto
            border-0
            rounded-lg
            shadow-2xl
            relative
            flex
            flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
            shadow-white
            "
            >
              {/* HEADER */}
              <div className="flex items-center justify-center p-6 pr-3 md:p-6 rounded-t relative border-b-[1px] border-b-primary/40">
                <div className="text-md font-semibold md:text-lg max-w-[90%] text-center line-clamp-2">
                  {title}
                </div>
                <button
                  onClick={handleClose}
                  className="p-1 border-0 hover:opacity-70 transition absolute right-3 md:right-9"
                >
                  <CloseIcon className="text-primary/70 w-6 h-6" />
                </button>
              </div>

              {/* BODY */}
              <div className="relative p-6 flex-auto">{body}</div>

              {/* FOOTER */}

              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row justify-end items-center gap-4 w-full text-xs font-semibold">
                  {secondaryActionLabel && (
                    <button
                      disabled={disabled}
                      onClick={handleClose}
                      className="px-4 py-2 border border-dark/20 bg-transparent text-dark rounded-md"
                    >
                      {secondaryActionLabel}
                    </button>
                  )}
                  <Link
                    href={`https://www.youtube.com/watch?v=${id}`}
                    target="_blank"
                    className="relative border border-primary/10 bg-primary/70 text-white shadow-lg shadow-primary/40 px-6 py-2 rounded-md text-xs font-semibold"
                  >
                    <div className="w-fit absolute top-[0.35rem] left-[0.65rem]">
                      <PlayButton
                        height={"1.25rem"}
                        width={"1.25rem"}
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="pl-4">{actionLabel}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
