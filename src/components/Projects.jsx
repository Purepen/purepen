import projectsArray from "./Data/projects.json"
function Projects() {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto py-5 md:py-16 px-5 md:px-20">
        <div className="grid gap-3 xl:grid-cols-3">
          {projectsArray.map((project) => (
            <div key={project.id} className="bg-white shadow-xl">
              <div className="border-b border-slate-900">
                <img src={project.image} className="h-80 w-full object-cover" />
              </div>
              <div className="flex flex-col gap-3 p-5">
                <h1 className="h-9 py-1 px-2 text-md font-semibold">
                  {project.title}
                </h1>
                <span className="h-20 py-1 px-2 text-sm">
                  {project.description.slice(0, 150)},
                  <a href={project.readMore} className="italic border-b">
                    {' '}
                    Learn more..
                  </a>
                </span>
                <a
                  className="py-3 px-5 border-2 rounded-md"
                  href={project.slug}
                >
                  VIEW PROJECT
                </a>
                <a
                  className="py-3 px-5 border-2 rounded-md"
                  href={project.file}
                >
                  VIEW PROJECT FILE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects
