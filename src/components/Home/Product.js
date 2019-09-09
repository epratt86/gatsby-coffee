import React from "react"
import Img from "gatsby-image"

export default function Product({ product }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card">
        <Img
          fluid={product.image.fluid}
          className="card-img-top"
          style={{ maxHeight: "232px" }}
        />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <p>${product.price}</p>
          <button className="btn btn-yellow mt-3 text-capitalize">
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}