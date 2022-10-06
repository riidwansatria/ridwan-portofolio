// Step 1: Import your component
import * as React from "react"
import Layout from "../components/templates/layout"
import Seo from "../components/seo"

import edufia from '/src/images/projects-edufia.png'
import supergeografi from '/src/images/projects-supergeografi.png'
import bitlearn from '/src/images/projects-bitlearn.png'
import ppiks from '/src/images/projects-ppiks.png'

// Step 2: Define your component
const ProjectsPage = () => {
  return (
    <body>
      <Seo
        title="Projects"
        description="Here's the collection of what I've been doing lately."
      />
      <Layout>
        <h1 className="md:text-5xl text-3xl text-black font-bold mb-8 pb-4 border-b-2">
          Projects
        </h1>
        <p className="md:text-xl text-lg">
          Here's the collection of what I've been doing lately.
        </p>
        <ol className="grid grid-cols-4 sm:grid-cols-6 grid-flow-row-dense py-8 gap-4">
          <li className="col-span-4">
            <a href="https://supergeografi.com/">
              <img
                src={supergeografi}
                alt="supergeografi"
                className="object-cover h-36 sm:h-48 w-full rounded-2xl hover:ring-2 hover:ring-gray-800"
              />
            </a>
          </li>
          <li className="col-span-2">
            <a href="https://edufia.net/">
              <img
                src={edufia}
                alt="edufia"
                className="object-cover h-36 sm:h-48 w-full rounded-2xl hover:ring-2 hover:ring-violet-600"
              />
            </a>
          </li>
          <li className="col-span-2">
            <a href="https://bitlearn.id/">
              <img
                src={bitlearn}
                alt="bitlearn"
                className="object-cover h-36 sm:h-48 w-full rounded-2xl hover:ring-2 hover:ring-green-600"
              />
            </a>
          </li>
          <li className="col-span-4">
            <a href="https://ppikyotoshiga.com/">
              <img
                src={ppiks}
                alt="ppiks"
                className="object-cover h-36 sm:h-48 w-full rounded-2xl hover:ring-2 hover:ring-red-500"
              />
            </a>
          </li>
        </ol>
      </Layout>
    </body>
  )
}
// Step 3: Export your component
export default ProjectsPage
