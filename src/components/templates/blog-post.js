import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "./layout"
import Seo from "../seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.contentfulBlogPost
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={post.title} description={post.description.description} />
      <article className="" itemScope itemType="http://schema.org/Article">
        <header className="max-w-3xl mx-auto">
          <h1 itemProp="headline" className="text-5xl font-semibold py-4">
            {post.title}
          </h1>
          <p>{post.date}</p>
        </header>
        <div className="max-w-4xl mx-auto py-12">
          {post.featuredImage && (
            <GatsbyImage
              className="w-full lg:h-96 sm:h-72 h-48 mx-auto object-cover rounded-md"
              image={getImage(post.featuredImage.gatsbyImageData)}
              alt={post.title}
            />
          )}
        </div>
        <section
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html,
          }}
          itemProp="articleBody"
          className="prose max-w-3xl mx-auto"
        />
      </article>
      <nav className="max-w-3xl mx-auto py-4 my-8 border-t-2 border-gray-200">
        <ul className="flex flex-wrap justify-between p-0 uppercase font-semibold text-gray-600 text-sm tracking-widest">
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      date(formatString: "MMMM Do, YYYY")
      featuredImage {
        gatsbyImageData
      }
      description {
        description
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
