import React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby';


const Navbar = () => {
   const data= useStaticQuery(graphql`
    query siteInfo {
        site {
        siteMetadata {
            title
        }
    }
  }`)

 const {title} =data.site.siteMetadata
  return (
    <nav>
        <h1>{title}</h1>
        <div className='Links'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/blogs'>Blogs</Link>
        </div>
     

      
    </nav>
  )
}

export default Navbar
