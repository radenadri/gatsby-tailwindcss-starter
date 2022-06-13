import * as React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"

const Layout = ({ children }) => (
  <div className="flex min-h-screen flex-col items-center justify-center">

    <main className="flex w-full flex-1 flex-col items-center justify-center px-6 md:px-20 text-center py-16">
      {children}
    </main>

    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout