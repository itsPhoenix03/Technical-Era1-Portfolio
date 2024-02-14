import Image from "next/image";
import CustomButtons from "./CustomButtons";
import CustomLink from "../CustomLink";

export default function Navbar() {
  return (
    <div className="sticky z-20 bg-white top-0 shadow-2xl shadow-white">
      {/* Logo Component */}
      <div className="absolute left-4 top-2 border border-yellow-400">
        {/* <Image
          src={"/logo512.png"}
          alt="Technical Era1 Logo"
          width={50}
          height={50}
          priority
        /> */}
        <p>Logo</p>
      </div>

      {/* Navbar Component */}
      <nav className="w-full z-10 py-2 px-4 border-b border-b-primary/50 flex justify-end items-center gap-10">
        <CustomLink title="Home" href="/" className="" />
        <CustomLink title="Builds/Works" href="/work" className="" />
        <CustomLink title="Playlists" href="/playlist" className="" />
        <CustomLink title="About" href="/about" className="" />

        {/* Contact & Theme Component */}
        <CustomButtons />
      </nav>
    </div>
  );
}
