import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

// This function iterates over the catories object from Contentful, and returns one category for each.
// ex. {'coffee', 'juice', 'coffee', 'coffee', 'juice'} => {'coffee', 'juice'}
const getCategories = items => {
  let tempItems = items.map(items => {
    //return all the values from the 'category' field in Contentful
    return items.node.category.toLowerCase()
  })
  let tempCategories = new Set(tempItems)
  // turn this obj into an array
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

export default class CafeMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }
  // method to filter menu based off which category is selected
  handleItems = category => {
    // all items in category
    let tempItems = [...this.state.items]
    if (category === "all") {
      this.setState(() => ({ coffeeItems: tempItems }))
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => ({ coffeeItems: items }))
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            {/* categories */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-yellow text-capitalize m-3"
                      onClick={() => {
                        this.handleItems(category)
                      }}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
            {/* items */}
            <div className="row">
              {this.state.coffeeItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      {/* CafeMenu image */}
                      <Img fixed={node.image.fixed} />
                    </div>
                    <div className="flex-grow-1 px-3">
                      {/* CafeMenu text */}
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">
                          <small>{node.title}</small>
                        </h6>
                        <h6 className="mb-0 text-yellow">
                          $<small>{node.price}</small>
                        </h6>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>there are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
