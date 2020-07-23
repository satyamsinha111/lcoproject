import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Dualinfoblock({ heading, image }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-light mb-5">
              Exercitation occaecat do deserunt aliqua id. Excepteur sit fugiat
              consequat commodo. Ipsum qui fugiat cupidatat tempor veniam velit
              sunt. Exercitation occaecat do deserunt aliqua id. Excepteur sit
              fugiat consequat commodo. Ipsum qui fugiat cupidatat tempor veniam
              velit sunt. Exercitation occaecat do deserunt aliqua id. Excepteur
              sit fugiat consequat commodo. Ipsum qui fugiat cupidatat tempor
              veniam velit sunt. Exercitation occaecat do deserunt aliqua id.
              Excepteur sit fugiat consequat commodo. Ipsum qui fugiat cupidatat
              tempor veniam velit sunt. Exercitation occaecat do deserunt aliqua
              id. Excepteur sit fugiat consequat commodo. Ipsum qui fugiat
              cupidatat tempor veniam velit sunt. Exercitation occaecat do
              deserunt aliqua id. Excepteur sit fugiat consequat commodo. Ipsum
              qui fugiat cupidatat tempor veniam velit sunt. Exercitation
              occaecat do deserunt aliqua id. Excepteur sit fugiat consequat
              commodo. Ipsum qui fugiat cupidatat tempor veniam velit sunt.
              Exercitation occaecat do deserunt aliqua id. Excepteur sit fugiat
              consequat commodo. Ipsum qui fugiat cupidatat tempor veniam velit
              sunt. Exercitation occaecat do deserunt aliqua id. Excepteur sit
              fugiat consequat commodo. Ipsum qui fugiat cupidatat tempor veniam
              velit sunt.
            </p>
          </div>
          <div className="col-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src={image} class="card-img-top" alt="Image goes here" />
              <div class="card-body">
                <h5 class="card-title">Just click photos</h5>
                <p class="card-text">
                  Mollit quis pariatur exercitation pariatur commodo cillum
                  mollit esse commodo quis nulla ipsum. Dolore magna nostrud
                  elit veniam laboris irure.
                </p>
                <a href="#" class="btn btn-info btn-block">
                  {heading}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
