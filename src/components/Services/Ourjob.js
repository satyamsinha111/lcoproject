import React from "react"

export default function Ourjob({ serviceImage, Heading }) {
  return (
    <section className="py-3 my-3 bg-theme">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 p-4 text-light">
            <h3 style={{ borderBottom: "1px solid #fff" }}>{Heading}</h3>
            Proident ullamco cupidatat esse excepteur commodo in amet fugiat
            Lorem esse dolor amet in. Amet veniam aliqua cillum eu nisi fugiat
            consectetur id ut. Est ex magna excepteur nulla. Velit ex consequat
            sint ullamco labore mollit officia. Proident ullamco cupidatat esse
            excepteur commodo in amet fugiat Lorem esse dolor amet in. Amet
            veniam aliqua cillum eu nisi fugiat consectetur id ut. Est ex magna
            excepteur nulla. Velit ex consequat sint ullamco labore mollit
            officia.sint ullamco labore mollit officia. Proident ullamco
            cupidatat esse excepteur commodo in amet fugiat Lorem esse dolor
            amet in. Amet veniam aliqua cillum eu nisi fugiat consectetur id ut.
            Est ex magna excepteur nulla. Velit ex consequat sint ullamco labore
            mollit officia.
          </div>
          <div className="col-sm-12 col-md-6 p-4">
            <img
              src={serviceImage}
              alt="..."
              className="img-fluid img-thumbnail"
              style={{ borderRadius: "5px" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
