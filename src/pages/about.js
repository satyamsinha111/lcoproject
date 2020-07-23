import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import TeamPhotos from "../components/About/TeamPhotos"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="About learn code online"
      subtitle=""
      heroclass="about-background"
    />
    <Dualinfoblock
      heading='"A message from CEO"'
      image="https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    />
    <Infoblock heading="About us" />
    <TeamPhotos />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
