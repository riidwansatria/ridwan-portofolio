import * as React from "react"
import Header2 from "../components/Header2.js"
import Footer from "../components/Footer"

const Layout = ({ children }) => {

  return (
    <body className="bg-white">
      <Header2/>
      <main className="max-w-6xl mx-auto md:px-6 px-4 py-8">
        {children}
      </main>
      <Footer/>
    </body>
  )
}

export default Layout
