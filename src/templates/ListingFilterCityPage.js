import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
// import Image from "gatsby-image"
import Layout from "../components/layout"
import { Container, Table, Button } from "react-bootstrap"
// import { Container } from "react-bootstrap/Container"
// import { Table } from "react-bootstrap/Table"
// import { Button } from "react-bootstrap/Button"

export const query = graphql`
  query($city: String!) {
    allListingJson(filter: { city: { eq: $city } }) {
      nodes {
        slug
        name
        asking_price
        city
        state
      }
    }
  }
`

const ListingFilterCityPage = ({ data }) => {
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
            {listing.nodes.map(node => (
              <tr>
                <Link to={`/listing/${node.slug}`}>{node.name}</Link>
                <td>{node.asking_price}</td>
                <td>{node.city}</td>
                <td>{node.state}</td>
              </tr>
            ))}
          </Table>
        </div>
      </Container>
    </Layout>
  )
}

export default ListingFilterCityPage
