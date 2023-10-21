import React from 'react'

function Projects() {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto py-5 md:py-16 px-5 md:px-20">
        <div className="grid gap-3 xl:grid-cols-3">
          <div className="bg-white shadow-xl">
            <div className="border-b border-slate-900">
              <img
                src="https://purepen1.github.io/purepen.github.io/images/pic01.jpg"
                className="h-80 w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 p-5">
              <h1 className="py-1 px-2 text-md font-semibold">
                COVID19 DATA EXPLORATION USING SQL
              </h1>
              <span className="py-1 px-2 text-sm">
                Exploration of covid 19 dataset in SQL Server.
              </span>
              <a className="py-3 px-5 border-2 rounded-md" href="">
                VIEW PROJECT
              </a>
            </div>
          </div>
          <div className="bg-white shadow-xl">
            <div className="border-b border-slate-900">
              <img
                src="https://purepen1.github.io/purepen.github.io/images/pic03.jpg"
                className="h-80 w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 p-5">
              <h1 className="py-1 px-2 text-md font-semibold">
                AWESOME CHOCOLATE DATA EXPLORATION USING SQL
              </h1>
              <span className="py-1 px-2 text-sm">
                Random sales dataset explored using SQL Server as an instrument.
              </span>
              <a className="py-3 px-5 border-2 rounded-md" href="">
                VIEW PROJECT
              </a>
            </div>
          </div>
          <div className="bg-white shadow-xl">
            <div className="border-b border-slate-900">
              <img
                src="https://purepen1.github.io/purepen.github.io/images/pic02.jpg"
                className="h-80 w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 p-5">
              <h1 className="py-1 px-2 text-md font-semibold">
                HOUSING DATA CLEANING USING SQL
              </h1>
              <span className="py-1 px-2 text-sm">
                Transformation of raw housing data in SQL Server to make it more
                useable for data analysis is what is done in this project.
              </span>
              <a className="py-3 px-5 border-2 rounded-md" href="">
                VIEW PROJECT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects