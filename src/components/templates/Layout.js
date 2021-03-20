import React, { Fragment } from "react"

import SEO from "./SEO"

import "../../statics/styles/main.scss"

const Layout = ({ title, children }) => {
  return (
    <body>
      <Fragment>
        <SEO title={title} />
        <main>{children}</main>
        <h1 className="title">THIS IS A TEST</h1>
      </Fragment>
    </body>
  )
}

export default Layout
