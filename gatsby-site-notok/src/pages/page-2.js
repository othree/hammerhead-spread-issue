import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

if (typeof window !== 'undefined') {
  window.onmessage = (event) => {
    console.log(event.data);
    setTimeout(() => {
      document.getElementById('msg').innerText = JSON.stringify(event.data);
    }, 1000);
  };
}

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <div id="msg"></div>
  </Layout>
)

export default SecondPage
