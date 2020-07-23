import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import TeamPhotos from "../components/About/TeamPhotos"
import Ourjob from "../components/Services/Ourjob"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Services of learncodeonline"
      subtitle=""
      heroclass="services-background"
    />
    {/* <Dualinfoblock
      heading='"A message from CEO"'
      image="https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    /> */}
    <Infoblock heading="Our services" />
    <Ourjob
      serviceImage="https://images.unsplash.com/photo-1590935216299-bb81bf542066?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      Heading="APP DEVELOPMENT"
    />
    <Ourjob
      serviceImage="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      Heading="WEB DEVELOPMENT"
    />
    <Ourjob
      serviceImage="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=891&q=80"
      Heading="ARTIFICIAL INTELLEGENCE"
    />
    <Ourjob
      serviceImage="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      Heading="ONLINE COACHING"
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
  }
`

export default AboutPage
