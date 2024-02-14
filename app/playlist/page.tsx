import AnimateHeading from "../components/AnimateHeading";
import PlaylistCard from "../components/PlaylistCard";

export default function Playlist() {
  return (
    <main className="px-24 py-20">
      <AnimateHeading
        heading="Dive into a World of Knowledge and Inspiration!"
        className=""
      />

      <div className="mt-14 flex flex-col justify-start items-start gap-10">
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
      </div>
    </main>
  );
}
