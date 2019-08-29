import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quo
              deserunt, consequuntur error ratione perspiciatis cum nulla? Totam
              eaque quasi reprehenderit unde velit officia deserunt harum, qui
              placeat similique laudantium, dolor sequi repellat quisquam
              nesciunt fugiat labore rem illum dolores nulla. Quas nemo ipsam
              tempora dolore repellat quod quisquam voluptatem? Ratione itaque
              perferendis ab delectus consequuntur ad odio reiciendis id
              laboriosam assumenda provident fugiat, velit, maxime dolorem illo
              et? Tempora laboriosam exercitationem inventore, quia perspiciatis
              vitae tenetur corporis voluptates consequuntur?
            </p>
            <Link to="/about">
              <button className="btn btn-yellow text-uppercase">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
