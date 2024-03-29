// Step 1: Import your component
import * as React from "react"
import Layout from "../components/templates/layout"
import Seo from "../components/seo"

// Step 2: Define your component
const ContactPage = () => {
  return (
    <body>
      <Seo
        title="Contact"
        description="Contact me here. Either fill out the form on this page or through my social media"
      />
      <Layout>
        <h1 className="md:text-5xl text-3xl text-black font-bold mb-8 pb-4 border-b-2">
          Contact
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-8">
          <div className="col-span-1 space-y-4 max-w-sm mb-16">
            <h3 className="md:text-3xl text-2xl font-semibold m-2">
              Get in touch
            </h3>
            <p className="text-lg text-gray-500 m-2">
              Contact me here. Either fill out the form on this page or find one
              of the other contact methods listed below to reach me that way.
            </p>
            <p>
              <a
                href="mailto:ridwan@supergeografi.com"
                className="font-semibold m-2"
              >
                ridwan@supergeografi.com
              </a>
            </p>
            <div className="flex flex-wrap">
              <a
                className="inline-flex bg-gray-800 text-white text-sm px-3 py-1 m-1 rounded-full object-center"
                href="https://github.com/riidwansatria"
              >
                Github
              </a>
              <a
                className="inline-flex bg-gray-800 text-white text-sm px-3 py-1 m-1 rounded-full object-center"
                href="https://facebook.com/riidwansatria"
              >
                Facebook
              </a>
              <a
                className="inline-flex bg-gray-800 text-white text-sm px-3 py-1 m-1 rounded-full object-center"
                href="https://www.instagram.com/riidwansatria/"
              >
                Instagram
              </a>
              <a
                className="inline-flex bg-gray-800 text-white text-sm px-3 py-1 m-1 rounded-full object-center"
                href="https://www.linkedin.com/in/ridwansatria/"
              >
                Linkedin
              </a>
              <a
                className="inline-flex bg-gray-800 text-white text-sm px-3 py-1 m-1 rounded-full object-center"
                href="https://twitter.com/riidwansatria"
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="md:hidden md:text-3xl text-2xl font-semibold m-2">
              Contact Form
            </h3>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit="submit"
              data-netlify-honeypot="bot-field"
            >
              <div class="grid grid-cols-1 md:gap-6 gap-4">
                <div class="grid grid-cols-2 md:gap-6 gap-4">
                  <input type="hidden" name="form-name" value="contact"></input>
                  <div hidden>
                    <input name="bot-field" />
                  </div>
                  <div className="col-span-1">
                    <label>
                      <input
                        type="text"
                        name="first-name"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lemon focus:ring focus:ring-lemon focus:ring-opacity-50"
                        placeholder="First Name"
                      />
                    </label>
                  </div>
                  <div className="col-span-1">
                    <label>
                      <input
                        type="text"
                        name="last-name"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lemon focus:ring focus:ring-lemon focus:ring-opacity-50"
                        placeholder="Last Name"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-span-1">
                  <label>
                    <input
                      type="email"
                      name="email"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lemon focus:ring focus:ring-lemon focus:ring-opacity-50"
                      placeholder="Email Address"
                    />
                  </label>
                </div>
                <div class="block">
                  <label>
                    <textarea
                      name="message"
                      class="mt-1 block w-full h-48 rounded-md border-gray-300 shadow-sm focus:border-lemon focus:ring focus:ring-lemon focus:ring-opacity-50"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </label>
                </div>
                <div data-netlify-recaptcha="true"></div>
                <div>
                  <button
                    type="submit"
                    className="bg-gray-800 hover:bg-gray-600 text-white text-sm sm:text-md font-bold py-2 px-4 rounded-md"
                  >
                    Submit →
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </body>
  )
}
// Step 3: Export your component
export default ContactPage
