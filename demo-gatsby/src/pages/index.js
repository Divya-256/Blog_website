import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import Img from "gatsby-image" 

export default function Home({ data }) {
  const {
    maintitle,
    subTitle,
    link_text,
    description,
    coverImage,
  } = data.strapiHome

  const image = coverImage[0].localFile.childImageSharp.fluid

  return (
    <Layout>
      <section className={styles.header}>
        <div className={styles.mainPart}>
          <h2>{maintitle}</h2>
          <h3>{subTitle}</h3>
          <p>{description}</p>
          <Link className={styles.btn} to="/blogs">
            {link_text}
          </Link>
        </div>
        <Img fluid={image} alt="Banner"  />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query HomeQuery {
    strapiHome {
      maintitle
      subTitle
      link_text
      description
      coverImage {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
