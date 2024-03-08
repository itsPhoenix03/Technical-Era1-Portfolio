import Image from "next/image";
import CustomButtons from "./CustomButtons";
import CustomLink from "../CustomLink";
import { getStats } from "@/app/hooks/helper";

export default async function Navbar() {
  const stats = await getStats();

  return (
    <div className="sticky z-20 bg-white top-0 shadow-2xl shadow-white">
      {/* Logo Component */}
      <div className="absolute w-[150px] h-[150px] -left-4 -top-5">
        <Image
          src={"/Logo.png"}
          alt="Technical Era1 Logo"
          width={500}
          height={500}
          priority
          className="object-cover"
        />
      </div>

      {/* Navbar Component */}
      <nav className="w-full z-10 py-2 px-4 border-b border-b-primary/50 flex justify-end items-center gap-10">
        <CustomLink title="Home" href="/" className="" />
        <CustomLink title="Builds/Works" href="/work" className="" />
        {/* <CustomLink title="Playlists" href="/playlist" className="" /> */}
        <CustomLink title="About" href="/about" className="" />

        {/* Contact & Theme Component */}
        <div className="flex justify-evenly items-center gap-6">
          <CustomButtons />
          {
            <div className="px-4 py-2 text-xs font-medium bg-primary/80 text-white rounded-md">
              <span>{stats?.subscriberCount} Subscriber&apos;s</span>
            </div>
          }
        </div>
      </nav>
    </div>
  );
}
