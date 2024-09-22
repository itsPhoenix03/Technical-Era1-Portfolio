import Image from "next/image";
import { PlayButton } from "./Icons";
import Link from "next/link";
import { ModalStore } from "../hooks/useModal";

type WorkCardProps = {
  title: string;
  description: string;
  id: string;
  image: string;
};

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  description,
  id,
  image,
}) => {
  const { onOpen } = ModalStore();

  return (
    <div className="col-span-1 border border-primary/10 rounded-md shadow-lg shadow-dark/10 p-4 xl:p-6">
      <Image
        src={image ? image : "/About.png"}
        alt="Work Pic"
        height={150}
        width={150}
        className="w-full max-h-[200px] object-cover rounded-md"
        loading="lazy"
      />

      <h2 className="py-1 min-h-[85px] font-semibold text-sm xl:text-base my-4 text-dark cursor-default line-clamp-3 first-letter:uppercase">
        {title.trim()}
      </h2>
      <p className="hidden text-xs min-h-[35px] text-secondary cursor-default line-clamp-2">
        {description}
      </p>

      <div className="mt-4 flex justify-evenly items-center gap-2">
        <Link
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          className="relative border border-primary/10 bg-primary/70 text-white shadow-lg shadow-primary/40 px-1 py-1 rounded-md text-xs font-semibold"
        >
          <div className="w-fit">
            <PlayButton
              height={"1.25rem"}
              width={"1.25rem"}
              className="w-6 h-6"
            />
          </div>
          {/* <span className="pl-0 md:pl-4">Watch Now</span> */}
        </Link>
        <button
          onClick={() => onOpen(id)}
          className="relative w-full md:w-full border border-primary/70 bg-white text-primary/70 shadow-lg shadow-primary/40 px-4 py-2 rounded-md text-xs font-semibold"
        >
          Useful Resources
        </button>
      </div>
    </div>
  );
};

export default WorkCard;
