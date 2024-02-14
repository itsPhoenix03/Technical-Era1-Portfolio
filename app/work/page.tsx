import AnimateHeading from "../components/AnimateHeading";
import WorkCard from "../components/WorkCard";

export default function Work() {
  return (
    <main className="px-24 py-20">
      <AnimateHeading
        heading="Showcasing Creativity and Innovation"
        className=""
      />

      <div className="mt-10 grid grid-cols-3 gap-4">
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </main>
  );
}
