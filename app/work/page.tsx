import AnimateHeading from "../components/AnimateHeading";
import ViewModal from "../components/Modal/ViewModal";
import { getPlaylists } from "../hooks/helper";
import WorkClient from "./WorkClient";

export default async function Work() {
  const playlists = await getPlaylists();

  return (
    <>
      <ViewModal />
      <main className="px-24 py-20">
        <AnimateHeading
          heading="Dive into a World of Knowledge and Inspiration!"
          className=""
        />

        <WorkClient playlists={playlists} />
      </main>
    </>
  );
}
