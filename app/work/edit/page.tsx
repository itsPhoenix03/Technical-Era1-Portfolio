import { Toaster } from "react-hot-toast";
import ViewModal from "../../components/Modal/ViewModal";
import { getMultiplePlaylistVideos, getPlaylists } from "../../hooks/helper";
import Edit from "./Edit";
import AnimateHeading from "@/app/components/AnimateHeading";

export default async function Work() {
  const playlists = await getPlaylists();

  return (
    <>
      <Toaster />
      <ViewModal />
      <main className="px-24 py-20">
        <AnimateHeading heading="👋🏼 Hi Miraj, upload resource files here!" />
        <Edit playlists={playlists} />
      </main>
    </>
  );
}
