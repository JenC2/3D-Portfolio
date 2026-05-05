import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 50,
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

  return (
    <section id="projects" ref={sectionRef} className="app-projects">
      <div className="w-full">
        <div className="projectslayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="TripTribe" />
            </div>
            <div className="text-content">
              <h2>
                A vibrant community platform dedicated to travel enthusiasts to
                connect, share experiences, and discover new destinations.
              </h2>
              <p className="text-white-50 md:text-xl">
                Built with Vue.js and Django, featuring user authentication,
                interactive content sharing, and a seamless user experience.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Adventure Guides" />
              </div>
              <h2 Guides>Adventure Guides - Travel Information Platform</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="Coming soon" />
              </div>
              <h2>Coming Soon</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
