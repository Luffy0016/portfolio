import React, { useEffect, useState, useRef } from "react";
import { Palette, Smartphone, Monitor, Zap } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  icon: JSX.Element;
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      icon: <Palette size={32} />,
      title: "Visual Design",
      skills: [
        { name: "UI Design", level: 30 },
        { name: "Brand Identity", level: 28 },
        { name: "Typography", level: 22 },
        { name: "Color Theory", level: 40 },
      ],
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Design",
      skills: [
        { name: "iOS Design", level: 23 },
        { name: "Android Design", level: 39 },
        { name: "App Store Optimization", level: 15 },
        { name: "Mobile UX", level: 54 },
      ],
    },
    {
      icon: <Monitor size={32} />,
      title: "Web Design",
      skills: [
        { name: "Responsive Design", level: 36 },
        { name: "Web Standards", level: 31 },
        { name: "Accessibility", level: 27 },
        { name: "Performance", level: 23 },
      ],
    },
    {
      icon: <Zap size={32} />,
      title: "UX Research",
      skills: [
        { name: "User Research", level: 59 },
        { name: "Usability Testing", level: 42 },
        { name: "Wireframing", level: 35 },
        { name: "Prototyping", level: 23 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
            observer.disconnect(); // run only once
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I combine technical expertise with creative vision to deliver
            exceptional design solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-purple-600 mr-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: animated ? `${skill.level}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Design Tools I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Figma",
              "Sketch",
              "Adobe XD",
              "Photoshop",
              "Illustrator",
              "Principle",
              "InVision",
              "Miro",
              "Notion",
              "Slack",
            ].map((tool) => (
              <div
                key={tool}
                className="px-6 py-3 rounded-full shadow-md border-2 border-gray-100 bg-white text-gray-700 font-medium 
                transition-all duration-300 
                hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-transparent hover:scale-105"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
