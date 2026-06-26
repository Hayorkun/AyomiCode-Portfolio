function Oneproject({ project }) {
  return (
    <div className="h-full rounded-2xl border border-gray-50 hover:shadow-orange-200 hover:shadow-lg transition-transform duration-300 hover:scale-102 ease-in-out">
      <div className="h-60 rounded-t-2xl  flex justify-center bg-orange-200 mb-2">
        <img
          className="w-70  mt-3 object-top object-cover"
          src={project.image}
          alt=""
        />
      </div>
      <div className="p-3 w-fit">
        <p className="w-fit py-2 px-3 border border-orange-400/80 rounded-3xl font-body text-xs text-orange-400 font-extrabold mb-1">
          Web App
        </p>
        <h3 className="font-body font-bold text-xl leading-relaxed mb-1 text-white/80">{project.name}</h3>
        <p className="font-body text-sm text-gray-400 ">{project.description}</p>
      </div>
      <div className="p-3 flex flex-wrap gap-3"> 
        {project.stack.map((t) => (
          <button className="py-1 px-2 border text-orange-400 rounded-lg" key={t}>{t}</button>
        ))}
      </div>
    </div>
  );
}

export default Oneproject;
