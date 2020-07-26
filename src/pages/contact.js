import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import ContactForm from "../components/Contact/ContactForm"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Contact us"
      subtitle=""
      heroclass="about-background"
    />
    <Infoblock heading="How can we help?" />
    <ContactForm />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
