import React, { useEffect, useState } from "react";
import { AtomIcon, Wrench, Palette, Sparkle } from "lucide-react";

const Skills = () => {
  const SkillsGroup = [
    {
      icon: [<AtomIcon className="bg-orange-400 p-1 rounded-md" />],
      title: ["Frontend"],
      bars: [
        { name: "React / Next.js", pct: 70 },
        { name: "TypeScript", pct: 50 },
        { name: "Tailwind CSS", pct: 68 },
        { name: "CSS / Animations", pct: 85 },
      ],
    },

    {
      icon: [<Wrench className="bg-orange-400 p-1 rounded-md" />],
      title: ["Backend & Tools"],
      bars: [
        { name: "Node.js/Express", pct: 70 },
        { name: "Git/GitHub", pct: 89 },
        { name: "Rest API", pct: 50 },
        { name: "SuperBase/Firebase", pct: 65 },
      ],
    },

    {
      icon: [<Palette className="bg-orange-400 p-1 rounded-md" />],
      title: ["Design"],
      bars: [
        { name: "Figma", pct: 83 },
        { name: "UI/UX Principles", pct: 65 },
        { name: "Responsive Design", pct: 90 },
        { name: "Accessibility (ally)", pct: 71 },
      ],
    },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  // const SkillBar = ({ name, pct, animate }) => (
  //   <div className="h-1.25 bg-white/6 rounded-full overflow-hidden">
  //     <div
  //       className="h-full rounded-full bg-linear-to-r from-orange-300 to-orange-600
  //       transition-all duration-1100 ease-out"
  //       style={{ width: animate ? `${pct}%` : "0%" }} // ← this drives the animation
  //     />
  //   </div>
  // );

  return (
    <section className="p-5 md:px-10 md:py-10">
      <div className="mt-7">
        <p className="text-orange-400">WHAT I KNOW</p>
        <h1 className="text-6xl font-serif font-bold mt-3">Skills</h1>
        <p className="mt-3 text-gray-400/70">
          Tools and technologies i work with daily.
        </p>
      </div>
      <div className="mt-10 grid gap-6">
        {SkillsGroup.map((skill, index) => (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              {skill.icon}

              <h2 className="text-2xl font-semibold">{skill.title}</h2>
            </div>

            <div className="space-y-5">
              {skill.bars.map((bar, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span>{bar.name}</span>

                    <span>{bar.pct}%</span>
                  </div>

                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-orange-300 to-orange-600 transition-all duration-1000 ease-out"
                      style={{
                        width: animate ? `${bar.pct}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="py-7 mt-10">
        <h3 className="text-orange-400 text-lg">Soft Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-2 py-3">
          <span className="flex gap-1 items-center justify-center border border-orange-300/20 py-2 rounded-xl">
            <Sparkle className="size-4 stroke-3 fill-white" /> Problem Solving
          </span>
          <span className="flex gap-1 items-center justify-center border border-orange-300/20 py-2 rounded-xl">
            <Sparkle className="size-4 stroke-3 fill-white" />
            Attention to details
          </span>
          <span className="flex gap-1 items-center justify-center border border-orange-300/20 py-2 rounded-xl">
            <Sparkle className="size-4 stroke-3 fill-white" /> Fast learner
          </span>
          <span className="flex gap-1 items-center justify-center border border-orange-300/20 py-2 rounded-xl">
            <Sparkle className="size-4 stroke-3 fill-white" /> Collaboration
          </span>
          <span className="flex gap-1 items-center justify-center border border-orange-300/20 py-2 rounded-xl">
            <Sparkle className="size-4 stroke-3 fill-white" /> Communication
          </span>
          <span className="flex gap-1 items-center justify-center border border-orange-300/20 py-2 rounded-xl">
            <Sparkle className="size-4 stroke-3 fill-white" /> Time management
          </span>
          <span className="flex gap-1 items-center justify-center border border-orange-300/20 py-2rounded-xl">
            <Sparkle className="size-4 stroke-3 fill-white" /> Code review
          </span>
          <span className="flex gap-1 items-center justify-center border border-orange-300/20 py-2 rounded-xl">
            <Sparkle className="size-4 stroke-3 fill-white" /> Self-motivated
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
