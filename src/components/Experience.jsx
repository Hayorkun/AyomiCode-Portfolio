const Experience = () => {
  return (
    <div className="w-full px-5 py-10 md:py-15 md:px-10 flex justify-center">
      <div className="my-max-width w-full">
        <p className="text-orange-300 font-bold mb-3">Experience</p>
        <h3 className="text-2xl font-semibold font-syne">Work-history</h3>
        <div className="mt-5 block">
          <div className="flex gap-5">
            <div className="">
              <div className="p-1 h-6 w-6 border border-orange-500 flex items-center justify-center rounded-xl">
                <span className="h-3 w-3 bg-orange-400 rounded-xl"></span>
              </div>
              <div className="ml-3 w-0 h-50 border-orange-500 border-l"></div>
            </div>
            <div>
              <p>2025 - 2026</p>
              <h2 className="font-semibold text-xl mb-2">Frontend Developer</h2>
              <p className="text-xs mb-4">Freelance Self-project</p>
              <h5>
                Building responsive web applications and landing pages for
                clients across fintech and e-commerce. Shipping polished React
                interfaces from Figma designs.
              </h5>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="">
              <div className="p-1 h-6 w-6 border border-orange-500 flex items-center justify-center rounded-xl">
                <span className="h-3 w-3 bg-orange-400 rounded-xl"></span>
              </div>
              <div className="ml-3 w-0 h-50 border-orange-500 border-l"></div>
            </div>
            <div>
              <p>2025 - 2026</p>
              <h2 className="font-semibold text-xl mb-2">
                Junior Frontend Developer
              </h2>
              <p className="text-xs mb-4">Freelance Self-project</p>
              <h5>
                Worked on marketing sites and internal dashboards. Improved page
                performance by 40% and introduced component-driven architecture
                with React.
              </h5>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="">
              <div className="p-1 h-6 w-6 border border-orange-500 flex items-center justify-center rounded-xl">
                <span className="h-3 w-3 bg-orange-400 rounded-xl"></span>
              </div>
            </div>
            <div>
              <p>2025 - 2026</p>
              <h2 className="font-semibold text-xl mb-2">
                Self-taught & Learning
              </h2>
              <p className="text-xs mb-4">online</p>
              <h5>
                Deep-dived into HTML, CSS, JavaScript, and React. Built personal
                projects and contributed to open-source to sharpen skills.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
