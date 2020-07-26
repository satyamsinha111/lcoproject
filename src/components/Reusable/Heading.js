import React from "react"

export default function Heading({ title }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center text-white mb-4">
          <h1 className="display-3">{title}</h1>
        </div>
      </div>
    </div>
  )
}
