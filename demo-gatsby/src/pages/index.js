import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"


export default function Home({ data }) {
  const {
    maintitle,
    subTitle,
    link_text,
    description,
    coverImage,
  } = data.strapiHome

  const imageUrl = `https://blog-backend-1zda.onrender.com` + coverImage[0].url;

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
        <img src={imageUrl} alt="Banner" className={styles.bannerImg} />
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
          url
      }
    }
  }
`
