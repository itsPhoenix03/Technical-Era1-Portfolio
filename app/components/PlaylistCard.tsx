import Image from "next/image";
import Link from "next/link";

const PlaylistCard = () => {
  return (
    <div className="border border-primary/40 rounded-lg flex justify-start items-center gap-2 overflow-hidden">
      <Image
        src={"/About.png"}
        alt="Dummy"
        height={250}
        width={700}
        className="w-full max-h-[300px] object-cover rounded-l-md"
      />

      <div className="flex flex-col justify-start items-end gap-4 p-4">
        <div className="mb-4">
          <h2 className="mb-4 font-semibold text-4xl text-primary/70 cursor-default">
            <span className="mr-2 font-bold">#</span>Title of the Playlist
          </h2>
          <p className="mt-2 text-sm text-secondary cursor-default">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit enim, quas fugit dolore sint hic culpa facere eos ut?
            Harum esse neque sunt unde sapiente at corrupti? Adipisci ipsum
            consectetur ducimus. Et, blanditiis assumenda necessitatibus libero
            eaque provident excepturi ad ducimus, enim nam architecto placeat
            labore. Laudantium recusandae, nobis distinctio ratione fugiat
            aliquid aut ut non odio a alias, consequatur cum doloribus? Quae
            possimus commodi, ipsa eos sapiente minus, ducimus nesciunt,
            assumenda corrupti nobis velit.
          </p>
        </div>

        <Link
          href="#"
          className="px-4 py-2 text-sm rounded-md border border-primary/10 bg-primary/70 text-white shadow-lg shadow-primary/40"
        >
          Watch Full Playlist
        </Link>
      </div>
    </div>
  );
};

export default PlaylistCard;
