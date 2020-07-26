import React from "react"
import Heading from "../Reusable/Heading"

export default function ContactForm() {
  return (
    <section className="my-3 p-2 bg-theme">
      <Heading title="Contact us" />
      <div className="col-10 col-sm-8 mx-auto">
        <form action="https://formspree.io/myynlboo" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Your mobile"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="Your message"
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-outline-light btn-block">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
