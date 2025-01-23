const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Articles {
      allStrapiPost {
        nodes {
          slug
        }
      }
    }
  `)

  data.allStrapiPost.nodes.forEach(node => {
    actions.createPage({
      path: '/blogs/'+ node.slug,
      component: path.resolve('./src/templates/blog_details.js'),
      context: { slug: node.slug }
    })
  })
}