import React from "react";
import {
  Globe2Icon,
  GlobeIcon,
  InstagramIcon,
  Linkedin,
  LucideTwitter,
} from "lucide-react";

const About = () => {
  return (
    <section className="py-12 bg-darkBlue">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-siteLavender">
          Forget About Me... Let’s Talk About YOU.
        </h1>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto px-4">
          <p className="mb-6 text-siteLavender text-base md:text-lg leading-relaxed text-justify">
            Welcome to the place where the beauty of vulnerability and the path
            to achievement collide on the internet. As someone familiar with
            the never-ending grind, I'm here to remind you that success is
            about enjoying every moment of the difficult ascent rather than
            just achieving your objectives.
            <br />
            <br />
            Breathe deeply, laugh till your stomach aches, and treasure the
            moments you spend outside of your office. Your essence should not
            be sacrificed for greatness. Nourish your thoughts, calm your
            body, and revive your broken spirit. Know that if you're a fellow
            programmer, entrepreneur, or dreamer pushing boundaries, you're not
            alone in this marathon of life. Let’s embrace our imperfections and
            celebrate victories together. In the end, it’s about finding peace
            within ourselves while leaving a mark on the world.
          </p>

          <h2 className="text-lg md:text-xl font-semibold mb-4 text-siteLavender">
            Why I Do What I Do
          </h2>
          <p className="mb-6 text-siteLavender text-base md:text-lg leading-relaxed text-justify">
            I’m driven by empathy for those who work hard and may be
            struggling. Creating technology that eases burdens and brightens
            lives is rewarding. Whether it’s streamlining processes, enhancing
            user experiences, or simply making technology more accessible, I’m
            committed to making a positive impact.
          </p>

          <h2 className="text-lg md:text-xl font-semibold mb-4 text-siteLavender">
            When I’m Not Coding...
          </h2>
          <p className="mb-6 text-siteLavender text-base md:text-lg leading-relaxed text-justify">
            In my free time, I enjoy collecting fragrances—it’s therapeutic! I
            also love football and support Manchester United. These hobbies
            remind me of the importance of balance and passion in life, which I
            bring to my work.
          </p>

          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-siteLavender">
              Connect with Me:
            </h2>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/piyush-gupta-298464212/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-siteYellow transition-transform duration-300 hover:scale-105"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://x.com/PiyushOnTwT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-siteYellow transition-transform duration-300 hover:scale-105"
              >
                <LucideTwitter size={28} />
              </a>
              <a
                href="https://www.instagram.com/chup.hoja.piyush/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-siteYellow transition-transform duration-300 hover:scale-105"
              >
                <InstagramIcon size={28} />
              </a>
              <a
                href="https://piyuzh77.github.io/PortfolioDisplay/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-siteYellow transition-transform duration-300 hover:scale-105"
              >
                <GlobeIcon size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
