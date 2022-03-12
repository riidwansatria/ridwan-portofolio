import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/templates/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allContentfulBlogPost.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Blog" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <body className="bg-white">
      <Layout location={location} title={siteTitle}>
        <Seo
          title="Blog"
          description="Browse through all of the articles I've written till this date"
        />
        <h1 className="md:text-5xl text-3xl text-black font-bold mb-8 pb-4 border-b-2">
          Latest Posts
        </h1>

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
                      <Link to={post.slug} itemProp="url">
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
