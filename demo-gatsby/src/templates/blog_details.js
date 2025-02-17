import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import * as styles from '../styles/blog-details.module.css'

const BlogDetails = ({ data }) => {
  const { title, thumb, content } = data.strapiPost
  const imageUrl = `https://blog-backend-1zda.onrender.com` +thumb[0].url;
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>

        <div className={styles.featured}>
          {imageUrl ? (
            <img src={imageUrl} alt={title} className={styles.featuredImg} />
          ) : (
            <div>No Image Available</div>
          )}
        </div>

        <div>
          {content && content.data && content.data.content ? (
            <ReactMarkdown>{content.data.content}</ReactMarkdown>
          ) : (
            <p>No content available</p>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BlogDetails

export const query = graphql`
  query BlogDetails($slug: String!) {
    strapiPost(slug: { eq: $slug }) {
      title
      thumb {
          url
      }
      content {
        data {
          content
        }
      }
    }
  }
`
