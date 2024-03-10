import Link from "next/link";
import CustomLink from "../CustomLink";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-white text-dark min-h-[250px] py-2 px-4 border-t border-t-primary/50">
      <div className="my-2 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Section 1 */}
        <div className="w-full md:w-[30%] flex justify-center items-center">
          <Image
            src={"/Logo.png"}
            alt="Technical Era1 Logo"
            priority
            width={500}
            height={500}
            className="h-[200px] w-[200px] object-cover"
          />
        </div>

        {/* Section 2 */}
        <div className="w-full md:w-[50%]">
          <p className="text-xs lg:text-sm text-center">
            I specialize in developing projects tailored for educational
            institutions, providing comprehensive support for students and
            professionals alike. From conceptualization to execution, I offer
            guidance and training in diverse disciplines, including electronics,
            &nbsp;<span className="text-primary">Arduino</span>
            &nbsp;programming, and innovative home decor solutions like water
            fountains. For personalized assistance and further collaboration,
            connect with me through my dedicated&nbsp;
            <span className="text-primary">YouTube</span>&nbsp;channel.
          </p>
        </div>

        {/* Section 3 */}
        <div className="w-full md:w-[30%] flex flex-col justify-center items-center gap-4">
          <CustomLink
            title="Vision"
            href="/about"
            className="hover:text-primary"
          />
          {/* TODO: Complete the link */}
          <CustomLink
            title="Youtube Channel"
            href="#"
            className="hover:text-primary"
          />
          <CustomLink
            title="My Work"
            href="/work"
            className="hover:text-primary"
          />

          {/* TODO: Dummy Mail Address change */}
          <Link
            href={"mailto:xyz@gmail.com"}
            className="bg-transparent border border-dark text-dark shadow-lg shadow-dark/20 text-sm px-4 py-2 rounded-md"
          >
            Contact Me!
          </Link>
        </div>
      </div>

      <div className="w-full text-sm text-center my-5">
        Copyright &copy; {new Date().getFullYear() + 2} Technical Era1
      </div>

      <div className="w-full text-xs text-center my-5 text-dark">
        Developed with ❣️ by{" "}
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/shreyasmisra03/"
          className="underline underline-offset-4"
        >
          Shreyas
        </Link>
      </div>
    </div>
  );
}
