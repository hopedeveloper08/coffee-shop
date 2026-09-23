export default function HeaderContent() {
  return (
    <div className="container mx-auto overflow-y-hidden relative h-full md:min-h-screen grid grid-cols-2 lg:grid-cols-8">
      <div className="text-white my-auto col-start-2 col-end-3 lg:col-start-6 lg:col-end-9">
        <h2 className="font-morabba-bold text-2xl md:text-6xl mb-0.5 md:mb-2">
          قهوه عربیکا تانزانیا
        </h2>
        <span className="font-morabba-light text-xl md:text-5xl">
          یک فنجان بالانس!
        </span>
        <div className="bg-primary w-25 h-px md:h-0.5 my-3 md:my-8"></div>
        <p className="font-dana text-xs md:text-2xl max-w-50 md:max-w-115">
          قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که
          در نواحی مختلف کمربند قهوه کشت میشود.
        </p>
      </div>
      <div className="rounded-full border justify-center items-center size-51 border-white/25 absolute bottom-0 left-0 right-0 mx-auto translate-y-2/4 hidden md:flex">
        <div className="rounded-full border flex justify-center items-center size-36 border-white/50">
          <div className="rounded-full border flex justify-center items-center size-24 border-white/80"></div>
        </div>
      </div>
    </div>
  );
}
