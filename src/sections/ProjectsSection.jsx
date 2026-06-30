import { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../constants";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  const [featuredProject, ...otherProjects] = projects;

  useGSAP(() => {
    const projectCards = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projectCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.8 },
    );
  }, []);

  const projectRefs = [project2Ref, project3Ref];

  return (
    <section id="projects" ref={sectionRef} className="app-projects">
      <div className="w-full h-full md:px-15 md:mt-40 px-10">
        <TitleHeader title="My Projects" />

        <div className="projectslayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src={featuredProject.imgPath} alt={featuredProject.alt} />
            </div>

            <div className="text-content">
              <h2>
                {featuredProject.title} - {featuredProject.description}
              </h2>

              <p>{featuredProject.details}</p>

              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center rounded-md border border-white/20 px-4 py-2 text-base font-semibold text-white-50 transition-colors hover:bg-white hover:text-black"
              >
                View GitHub
              </a>
            </div>
          </div>

          <div className="project-list-wrapper">
            {otherProjects.map((project, index) => (
              <div
                className="project"
                ref={projectRefs[index]}
                key={project.title}
              >
                <div className={`image-wrapper ${project.bgColor}`}>
                  <img src={project.imgPath} alt={project.alt} />
                </div>

                <h2 className="text-xl md:text-2xl lg:text-3xl">
                  {project.title} - {project.description}
                </h2>

                <p className="mt-3 text-white-50 text-body">
                  {project.details}
                </p>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-fit items-center rounded-md border border-white/20 px-4 py-2 text-base font-semibold text-white-50 transition-colors hover:bg-white hover:text-black"
                >
                  View GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
