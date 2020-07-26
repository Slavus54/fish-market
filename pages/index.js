import Header from "../components/Header"
import ProductList from "../components/ProductList"
import Footer from "../components/Footer"
import Head from "next/head"
import axios from 'axios'

import "../styles.scss"
import { constants } from "crypto"


const Index = (props) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="ZTZjOTYwYTAtZGY0Yy00MWZjLWIwN2UtMmFiZmNlZWRiYTEwNjM3MzEyNzI2MjMyOTQ1MjM1" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <img src="/static/aquarium.svg" alt="a" className="background-image" />
        <div className="promotional-message">
          <h3>REDISCOVER</h3>
          <h2>Fishkeeping</h2>
          <p>An <strong>exclusive collection of bettas</strong> available for everyone.</p>
        </div>
        <ProductList products={props.products} />
      </main>
      <Footer />
    </div>
  )
}

Index.getInitialProps = async () => {
  return {
    products: [
      {id: "nextjs_halfmoon", name: "Halfmoon Betta", price: 25.00, image: "../static/halfmoon.jpg", description: "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees."},
      {id: "nextjs_dragonscale", name: "Dragon Scale Betta", price: 35, image: "../static/dragonscale.jpg",description: "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor."},
      {id: "nextjs_crowntail", name: "Crowntail Betta", price: 7.50, image: "../static/crowntail.jpg", description: "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb."} ,
      {id: "nextjs_veiltail", name: "Veiltail Betta", price: 5.00, image: "../static/veiltail.jpg", description: "By far the most common betta fish. You can recognize it by its long tail aiming downwards."},
    ]
  }
}

export default Index
