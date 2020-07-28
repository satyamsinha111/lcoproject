/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./bootstrap.min.css"
import "./layout.css"
import Footer from "./Reusable/Footer"
import Navbar from "./Reusable/Navbar"

const Layout = ({ children }) => {
  const [show, setShow] = useState(true)

  const showBodyPage = () => {
    setTimeout(() => {
      setShow(false)
    }, 500)
  }

  useEffect(() => {
    showBodyPage()
  }, [])

  const StartupPage = () => {
    return (
      <div
        className="d-flex justify-content-center align-item-center"
        style={{ height: "100vh", marginTop: "10%" }}
      >
        <div
          class="spinner-border d-flex justify-content-center align-item-center text-danger"
          style={{ width: "12rem", height: "12rem" }}
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    )
  }

  const AppBody = () => {
    return (
      <>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </>
    )
  }

  return show ? StartupPage() : AppBody()
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
