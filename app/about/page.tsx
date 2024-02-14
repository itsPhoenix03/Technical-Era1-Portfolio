import Image from "next/image";
import AnimateHeading from "../components/AnimateHeading";
import Link from "next/link";

export default function About() {
  return (
    <main className="relative py-20 px-24">
      <AnimateHeading
        heading="Empowering Innovation, Transforming Education"
        className="py-2"
      />

      <div className="mt-20">
        <div className="absolute -right-[0%] bottom-[0%] -z-10">
          <Image
            src={"/About.png"}
            alt="About Page Image"
            width={500}
            height={500}
            priority
            className="mix-blend-multiply contrast-200"
          />
        </div>

        <div className="w-[70%] p-2">
          <p className="text-dark font-normal text-md">
            I&apos;m deeply passionate about&nbsp;
            <span className="text-primary font-medium">
              fostering innovation
            </span>
            &nbsp;and transforming education through&nbsp;
            <span className="text-primary font-medium">hands-on learning</span>
            &nbsp;experiences. With a diverse team of educators, engineers, and
            creative minds, I strive to empower individuals of all ages to
            explore their curiosity, expand their skills, and unleash their
            creativity. My journey began with a vision to bridge the&nbsp;
            <span className="text-primary font-medium">gap</span>
            &nbsp;between&nbsp;
            <span className="text-primary font-medium">
              theoretical knowledge
            </span>
            &nbsp;and&nbsp;
            <span className="text-primary font-medium">
              practical application
            </span>
            , offering a dynamic platform where learning extends beyond the
            classroom.
            <br />
            <br />
            With a focus on project-based learning, I provide a range of
            educational resources, tutorials, and workshops designed to inspire
            and engage learners at every level. From STEM (Science, Technology,
            Engineering, and Mathematics) projects to DIY electronics, coding,
            and creative arts, my curated content encourages exploration,
            experimentation, and collaboration. Whether you&apos;re a student,
            educator, hobbyist, or industry professional, my goal is to equip
            you with the tools, knowledge, and support needed to succeed in
            today&apos;s rapidly evolving world.
            <br />
            <br />
            At the heart of&nbsp;
            <span className="text-primary font-medium">
              my mission is a commitment
            </span>
            &nbsp;to fostering a culture of innovation and lifelong learning.
            Through engaging content and a community-driven approach,&nbsp;
            <span className="text-primary font-medium">
              I aim to spark curiosity, ignite passion, and cultivate the next
              generation of innovators and problem-solvers.
            </span>
            &nbsp;Join me on this exciting journey of discovery, where every
            project is an opportunity to learn, grow, and make a positive impact
            on the world.
          </p>
        </div>

        <div className="mt-10 p-2">
          <Link
            href={"mailto:xyz@gmail.com"}
            className="border border-primary/10 bg-primary/70 text-white text-md font-medium py-2 px-4 shadow-lg shadow-primary/70 rounded-md"
          >
            Have a Chat with Me!
          </Link>
        </div>
      </div>
    </main>
  );
}
