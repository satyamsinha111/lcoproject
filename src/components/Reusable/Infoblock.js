import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Infoblock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Incididunt eu tempor exercitation exercitation sunt duis. Dolor
              commodo aliquip eiusmod elit excepteur laborum amet ipsum. Nulla
              laboris cupidatat sunt est consectetur labore irure velit aute. Ea
              dolor dolor esse exercitation tempor. Sit enim aliquip elit nulla
              eiusmod laboris ex sunt consequat. Dolor et eiusmod sint sunt.
              Excepteur ut labore incididunt pariatur laboris deserunt enim aute
              aute incididunt nostrud aute deserunt aute.
            </p>
            <Link to="/about">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
