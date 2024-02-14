import Image from "next/image";
import { PlayButton } from "./Icons";
import Link from "next/link";

const WorkCard = () => {
  return (
    <div className="col-span-1 border border-primary/10 rounded-md shadow-lg shadow-dark/10  p-6 transition-all duration-300 ease-linear">
      {/* TODO: Dummy data remove */}
      <Image
        src={"/About.png"}
        alt="Dummy Pic"
        height={150}
        width={150}
        className="w-full max-h-[200px] object-cover rounded-md"
      />

      <h2 className="font-semibold text-2xl my-4 text-dark cursor-default">
        Title of the Video
      </h2>
      <p className="text-xs text-secondary cursor-default">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quam
        ipsa praesentium vel debitis omnis nesciunt voluptatum et porro
      </p>

      <div className="mt-4 flex justify-end items-center gap-2">
        <Link
          href="#"
          className="relative border border-primary/10 bg-primary/70 text-white shadow-lg shadow-primary/40 px-4 py-2 rounded-md text-xs font-semibold"
        >
          <div className="w-fit absolute top-[0.35rem] left-[0.65rem]">
            <PlayButton height={"1.25rem"} width={"1.25rem"} className="" />
          </div>
          <span className="pl-4">Watch Now</span>
        </Link>
        <button className="relative border border-primary/70 bg-white text-primary/70 shadow-lg shadow-primary/40 px-4 py-2 rounded-md text-xs font-semibold">
          Know More
        </button>
      </div>
    </div>
  );
};

export default WorkCard;
