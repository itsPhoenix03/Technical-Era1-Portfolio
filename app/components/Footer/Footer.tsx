import Link from "next/link";
import CustomLink from "../CustomLink";

export default function Footer() {
  return (
    <div className="bg-white text-dark min-h-[250px] py-2 px-4 border-t border-t-primary/50">
      <div className="my-10 flex justify-between items-center gap-4">
        {/* Section 1 */}
        <div className="w-[30%]">Logo</div>

        {/* Section 2 */}
        <div className="w-[50%]">
          <p className="text-sm text-center">
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
        <div className="w-[30%] flex flex-col justify-center items-center gap-4">
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
            className="bg-transparent border border-dark text-dark text-sm px-4 py-2 rounded-md"
          >
            Hire Me!
          </Link>
        </div>
      </div>

      <div className="w-full text-sm text-center my-10">
        Copyright &copy; {new Date().getFullYear()} Technical Era1
      </div>
    </div>
  );
}
