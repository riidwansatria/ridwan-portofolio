// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"

// Step 2: Define your component
const AboutPage = () => {
  return (
    <body>
      <Seo title="About Me" />
      <Layout>
        <h1 className="md:text-5xl text-3xl text-black dark:text-white md:text-center font-bold mb-8 pb-4 border-b-2">About Me</h1>
        <div className="max-w-4xl mx-auto">
          <p className="md:text-lg text-md">
            I’m currently a first-year undergraduate student at Kyoto University Department of Global Engineering. While pursuing civil engineering as my future career, I also do geography and web development as a hobby.
          </p>
          <h2 className="md:text-2xl text-xl text-black dark:text-white font-bold mt-8 py-4">What I'm currently doing</h2>
          <ol className="md:text-lg text-md list-decimal prose px-8 max-w-none">
            <li>🏙️ I studied civil engineering as an <a href="https://www.s-ge.t.kyoto-u.ac.jp/int/en">International Course Program</a> student at Kyoto University starting from April 2021. I haven’t decided yet, but I’m leaning toward urban planning and transportation engineering as my specialization.</li>
            <li>🌏 During my high school-university break, I started a geography reference blog, <a href="https://supergeografi.com/">Supergeografi</a>. I wrote all of the articles and manages the technical side of the website.</li>
            <li>📜 At <a href="https://edufia.net/">Edufia</a>  , an olympiad education startup, I managed the EduClass product and responsible for mentor-related affairs. </li>
            <li><svg className="inline md:h-6 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#DC1F26" d="M32 5H4C1.791 5 0 6.791 0 9v9h36V9c0-2.209-1.791-4-4-4z"/><path fill="#EEE" d="M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-9h36v9z"/></svg> I’m part of the Indonesian Students' Association in Japan (PPIJ), serving in the website development division.</li>
            <li>🏫 I’m open to teach geography. I can be reached by email or through <a href="/contact">my social media</a>.️</li>
          </ol>

          <h2 className="md:text-2xl text-xl text-black dark:text-white font-bold mt-8 py-4">About this website</h2>
          <p className="md:text-lg text-md prose max-w-none">
          On this website I will write stories about my life journey, including my life as an international student in a Japanese university, and my experience of being involved in several interesting projects. This website will also contain articles about programming, especially in website development. I started to develop my blog/portofolio since May 2021. This personal website utilizes <a href="https://jamstack.org/">JAMstack</a> framework and built using GatsbyJS.
          <br/><br/>
          Disclaimer: The opinions expressed on this website are my own and do not reflect the views of any insitution or company I am affiliated with. This website solely become the platform to share my personal thought(s).
          </p>
        </div>
      </Layout>
    </body>
  )
}
// Step 3: Export your component
export default AboutPage