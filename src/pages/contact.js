// Step 1: Import your component
import * as React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"

// Step 2: Define your component
const ContactPage = ({children}) => {
  return (
    <body>
      <Seo title="Contact" />
      <Layout>
        <h1 className="md:text-5xl text-3xl text-black dark:text-white font-bold mb-8 pb-4 border-b-2">Contact</h1>
        <p className="md:text-2xl text-xl">
            You can contact me through this.
        </p>
      </Layout>
    </body>
  )
}
// Step 3: Export your component
export default ContactPage