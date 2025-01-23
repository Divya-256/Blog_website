import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from '../../styles/blogs.module.css';
import Img from 'gatsby-image';

const Blogs = ({ data }) => {
  const blogs = data.allStrapiPost.nodes;

  return (
    <Layout>
      <div className={styles.blog}>
        <h2>My Blog</h2>
        <h3>Articles, Tutorials, and Insights I've Written</h3>
        <p>Explore my blog posts on various topics related to design, development, and technology.</p>
         <div className={styles.blogs}>
         {blogs.map(blog => (
           <Link to={`/blogs/${blog.slug}`} key={blog.id}>
             <div>
                {blog.thumb && blog.thumb.length > 0 && blog.thumb[0].localFile && blog.thumb[0].localFile.childImageSharp ? (
                  <Img fluid={blog.thumb[0].localFile.childImageSharp.fluid} alt={blog.title}className={styles.blogImg}/>
                ) : (
                  <div className={styles.noThumb}>No Image Available</div> 
                )}
             <h3>{ blog.title }</h3>
             <p>{blog.contact}</p>
           </div>
         </Link>
         ))}
         </div>
     </div>
    </Layout>
  );
}

export default Blogs;


export const query = graphql`
  query BlogsPage {
    allStrapiPost {
      nodes {
        id
        slug
        title
        contact
        date
        content {
          data {
            id
            content
          }
        }
        thumb {
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

