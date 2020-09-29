// exports.createPages = async ({ actions: { createPage }, graphql }) => {
//   const data = await graphql(`
//     {
//       allListingJson {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `)

//   if (data.errors) {
//     console.log("Error retrieving data", data.errors)
//     return
//   }

//   const listingTemplate = require.resolve("./src/templates/ListingPage.js")

//   data.data.allListingJson.edges.forEach(edge => {
//     createPage({
//       path: `/listing/${edge.node.slug}/`,
//       component: listingTemplate,
//       context: {
//         slug: edge.node.slug,
//       },
//     })
//   })
// }

// Attempt at filtering/sorting
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(`
    {
      allListingJson {
        edges {
          node {
            city
            slug
          }
        }
      }
    }
  `)

  if (data.errors) {
    console.log("Error retrieving data", data.errors)
    return
  }

  const listingFilterCityTemplate = require.resolve(
    "./src/templates/ListingFilterCityPage.js"
  )

  data.data.allListingJson.edges.forEach(edge => {
    createPage({
      path: `/listing-filter-city/${edge.node.city}/`,
      component: listingFilterCityTemplate,
      context: {
        city: edge.node.city,
        // node: edge.node,
      },
    })
  })

  const listingTemplate = require.resolve("./src/templates/ListingPage.js")
  data.data.allListingJson.edges.forEach(edge => {
    createPage({
      path: `/listing/${edge.node.slug}/`,
      component: listingTemplate,
      context: {
        slug: edge.node.slug,
        // node: edge.node,
      },
    })
  })
}
