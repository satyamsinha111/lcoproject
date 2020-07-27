import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import CourseCart from "../components/Cart/CourseCart"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write code"
      subtitle="Learn code online"
      heroclass="hero-background"
    />
    <Infoblock heading="About us" />
    <CourseCart courses={data.courses} />
    <Dualinfoblock
      heading="Our team"
      image="https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          description
          category
          createdAt
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
