import React from "react"
import { graphql, Link } from "gatsby"
// import Image from "gatsby-image"
import Layout from "../components/layout"
import { Container, Table, Button } from "react-bootstrap"

export const query = graphql`
  query {
    allListingJson(sort: { fields: [state, city], order: [ASC, DESC] }) {
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
      <Container>
        <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
          <br />
          <br />
          {/* <Link to="/">Go back to the homepage</Link> <br /> */}
          <h1>Biz Listings</h1>
          <p>Click a column header button to sort by that column Asc/Desc:</p>
          <Table responsive="md" striped bordered hover className="noWrap">
            <thead>
              <th>
                <Button variant="outline-primary">Biz Name</Button>{" "}
              </th>
              <th>
                <Button variant="outline-primary">Asking Price</Button>{" "}
              </th>
              <th>
                <Button variant="outline-primary">City</Button>{" "}
              </th>
              <th>
                <Button variant="outline-primary">State</Button>{" "}
              </th>
            </thead>
            {listing.nodes.map(biz => (
              <tr>
                <Link to={`/listing/${biz.slug}`}>{biz.name}</Link>
                <td>{biz.asking_price}</td>
                <Link to={`/listing-filter-city/${biz.city}`}>{biz.city}</Link>
                <td>{biz.state}</td>
              </tr>
            ))}
          </Table>
        </div>
      </Container>
    </Layout>
  )
}

export default Listing
