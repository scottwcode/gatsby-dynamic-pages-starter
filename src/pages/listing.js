import React from "react"
import { graphql, Link } from "gatsby"
// import Image from "gatsby-image"
import Layout from "../components/layout"

export const query = graphql`
  query {
    allListingJson {
      nodes {
        name
        asking_price
        city
        state
        slug
      }
    }
  }
`

const Listing = ({ data }) => {
  const listing = data.allListingJson

  return (
    <Layout>
      <h1>Listings</h1>
      {listing.nodes.map(biz => (
        <div>
          <Link to={`/listing/${biz.slug}`}>{biz.name}</Link>
          <p>{biz.asking_price}</p>
          <p>{biz.city}</p>
          <p>{biz.state}</p>
        </div>
      ))}
    </Layout>
  )
}

export default Listing
