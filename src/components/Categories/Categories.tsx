import { categoriesData } from "../../lib/constants";

export default function Categories() {
  return (
    <section
      className="
        container mx-auto max-w-7xl px-4
        mt-10 md:mt-20
        flex flex-wrap justify-center items-center
        gap-5 md:gap-15
    "
    >
      {categoriesData.map(item => (
        <a href={item.link} key={item.title}
          className="
            flex flex-col justify-center items-center
          "
        >
          <img src={item.image} alt="category" className="size-25 md:size-50" />
          <h3 className="font-dana-demibold text-sm md:text-xl">{item.title}</h3>
        </a>
      ))}
    </section>
  );
}
