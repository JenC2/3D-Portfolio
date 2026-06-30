import { abilities } from "../constants";
import TitleHeader from "../components/TitleHeader";

const AbilityCards = () => {
  return (
    <div className="w-full section-padding">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="My Qualities" />
        <div className="mx-auto grid-4-cols mt-32">
          {abilities.map(({ imgPath, title, desc }) => (
            <div
              key={title}
              className="card-border rounded-xl p-8 flex flex-col gap-4 text-center"
            >
              <div className="flex items-center justify-center p-5">
                <img src={imgPath} alt={title} className="rounded-xl" />
              </div>
              <h3 className="text-2xl md:text-2xl lg:text-3xl font-semibold">
                {title}
              </h3>
              <p className="text-white-50 text-body">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AbilityCards;
