import AnimateHeading from "../components/AnimateHeading";
import ViewModal from "../components/Modal/ViewModal";
import { getPlaylists } from "../hooks/helper";
import WorkClient from "./WorkClient";

export default async function Work() {
  const playlists = await getPlaylists();

  return (
    <>
      <ViewModal />
      <main className="px-4 md:px-24 py-10 md:py-20">
        <AnimateHeading
          heading="Dive into a World of Knowledge and Inspiration!"
          className="!text-3xl md:!text-6xl lg:!text-8xl"
        />

        <WorkClient playlists={playlists} />
      </main>
    </>
  );
}
