import Image from "next/image";
import Layout from "./components/Layout";
import AnimateHeading from "./components/AnimateHeading";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
      <Layout>
        <div className="flex flex-col md:flex-row justify-end items-center gap-8">
          {/* Cover Picture */}
          <div className="md:absolute md:top-[10%] md:-left-[6%] lg:-left-[4%] xl:left-[2%] -z-10">
            <Image
              src={"/HomePage.png"}
              alt="Cover Photo"
              height={750}
              width={750}
              priority
              className="w-full md:w-[65%] lg:w-[80%] xl:w-auto h-full md:h-[80%] xl:h-auto"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-[75%] lg:w-[55%] p-2 flex flex-col justify-center items-start gap-6">
            <AnimateHeading
              heading="Unlocking Creativity: Your One-Stop Destination for Educational Projects and Innovative Solutions!"
              className="!text-2xl md:!text-4xl xl:!text-5xl md:text-right lg:text-left"
            />

            <p className="text-xs xl:text-sm font-medium text-dark">
              Embark on a journey of innovation and learning with my
              comprehensive support and guidance. Whether you&apos;re a student
              seeking to excel in academic projects or a hobbyist eager to
              explore the realm of electronics and home decor, my tailored
              assistance is here to elevate your skills and projects to new
              heights. With a strong foundation in education and engineering,
              coupled with a passion for creativity, I am dedicated to
              empowering individuals to unleash their full potential and bring
              their ideas to life.
              <br />
              <br />
              From hands-on training to step-by-step tutorials, I provide the
              tools and resources necessary for success in project development.
              Let&apos;s collaborate, learn, and create together as we navigate
              the exciting world of electronics, programming, and design. Join
              me on this enriching journey of exploration and discovery, where
              every project is an opportunity to learn, grow, and innovate.
              Together, we can turn imagination into reality and make a
              meaningful impact in the world of innovation.
            </p>

            <div className="flex justify-between items-center gap-4">
              {/* TODO: Fix the routing and mail buttons */}
              <Link
                href={"mailto:xyz@gmail.com"}
                className="px-4 py-2 rounded-md border border-dark bg-dark text-light shadow-lg shadow-dark/70 text-xs md:text-sm"
              >
                Talk to Me!
              </Link>
              <Link
                href={"/work"}
                className="px-4 py-2 rounded-md border border-dark bg-transparent text-dark shadow-lg shadow-dark/40 text-xs md:text-sm"
              >
                See My Latest Tutorials
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
