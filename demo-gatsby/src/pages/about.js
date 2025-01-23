import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import * as styles from "../styles/about.module.css"

const About = ({ data }) => {
  const { 
    mainTitle, 
    mainContent, 
    subHeading, 
    bottomContent, 
    subHeading1, 
    features 
  } = data.strapiAbout

  return (
    <Layout>
      <section className={styles.about}>
        <h1>{mainTitle}</h1>
        <p>{mainContent}</p>

        <div className={styles.aboutDetails}>
          <h2>{subHeading}</h2>
          <p>{bottomContent}</p>
          
          <p>{subHeading1}</p>
          <ul>
            {features.strapi_json_value && features.strapi_json_value.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p>{bottomContent}</p>
        </div>
      </section>
    </Layout>
  )
}

export default About
export const query = graphql`
  query AboutPageQuery {
    strapiAbout {
      mainTitle
      mainContent
      subHeading
      bottomContent
      subHeading1
      features {
        strapi_json_value
      }
    }
  }
`
