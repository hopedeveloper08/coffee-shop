import ClubCTA from "./ClubCTA";
import ClubDescription from "./ClubDescription";

export default function Club() {
  return (
    <section
      className="
        container
        mt-8 md:mt-20
      "
    >
      <div
        className="
          flex max-md:flex-col justify-between gap-8 
          py-8 lg:py-6 px-3 lg:px-11
          rounded-2xl
          bg-linear-to-l from-emerald-600 to-emerald-500
          text-accent-content
      "
      >
        <ClubDescription />
        <ClubCTA />
      </div>
    </section>
  );
}
