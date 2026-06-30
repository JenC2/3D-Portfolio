import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { words } from "../constants";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-10 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                From
                <span>
                  <Typewriter
                    options={{
                      strings: words.map((word) => word.text),
                      autoStart: true,
                      loop: true,
                      cursor: "_",
                      deleteSpeed: 30,
                      delay: 50,
                    }}
                  />
                </span>
              </h1>
              <h1>to shipped software</h1>
            </div>
            <p className="text-white-50 md:text-xl relation z-10 pointer-events-none">
              Hi, I’m Jenny, a full-stack developer focused on building web and
              mobile applications, <br className="hidden xl:block" />
              from backend systems to clean user experiences.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="check my profile"
            />
          </div>
        </header>

        {/* RIGHT: 3D MODEL */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
