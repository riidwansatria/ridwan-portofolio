import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/templates/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allContentfulBlogPost.nodes

  return (
    <body className="bg-white">
      <Layout location={location} title={siteTitle}>
        <Seo title="Home" />
        <div>
          <div class="md:py-32 py-12">
            <div class="md:pb-20 pb-12 mx-auto text-left font-family-sans ">
              <h1 class="md:text-6xl text-3xl text-blac font-bold mb-4">
                <span className="text-2xl md:text-5xl text-gray-800">
                  Hey there! 👋{" "}
                </span>
                <br />
                I'm Ridwan, Global Engineering student at Kyoto University
              </h1>
              <p class="text-lg text-gray-600 text-gray-400">
                Welcome to my personal website. This site will be used as a
                platform to share my thoughts and showcase the projects that I’m
                currently doing/I’ve done in the past.
              </p>
              <div className="inline-flex space-x-2">
                <button className="bg-gray-800 hover:bg-gray-600 text-white text-sm sm:text-md font-bold my-8 py-2 px-4 rounded">
                  <Link to="/blog">Go to Blog →</Link>
                </button>
                <button className="bg-white hover:bg-lemon text-gray-800 text-sm sm:text-md font-bold my-8 py-2 px-4 border-2 border-gray-200 hover:border-lemon rounded">
                  <Link to="/about">About Me</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8 pb-4 border-b-2 flex justify-between items-center">
          <h2 className="md:text-4xl text-2xl font-semibold flex">
            📝 Latest Posts
          </h2>
          <div className="flex">
            <Link to="/blog" className="sm:text-md text-sm text-gray-600 p-4">
              Read all posts →
            </Link>
          </div>
        </div>

        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.title || post.slug

            return (
              <li key={post.slug}>
                <article
                  className="post-list-item max-w-3xl"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h3 className="text-gray-800 hover:text-gray-600 font-semibold md:text-2xl text-xl">
                      <Link to={`/blog/${post.slug}`} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h3>
                    <small class="text-gray-400">{post.date}</small>
                  </header>
                  <section className="text-gray-500 text-sm pb-8">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.description.description,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          })}
        </ol>

        <h2 className="md:text-4xl text-2xl font-semibold mb-8 pt-24 pb-4 border-b-2">
          🕹️ Projects
        </h2>
        <ol className="space-y-4">
          <li>
            <h3 className="text-gray-800 md:text-2xl text-xl">
              <a href="https://supergeografi.com/">Supergeografi</a>
            </h3>
          </li>
          <li>
            <h3 className="text-gray-800 md:text-2xl text-xl">
              <a href="https://edufia.net/">Edufia</a>
            </h3>
          </li>
        </ol>
      </Layout>
    </body>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost {
      nodes {
        title
        slug
        description {
          description
        }
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
