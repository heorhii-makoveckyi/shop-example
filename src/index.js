import React from 'react'
import ReactDOM from 'react-dom'

import Head from './components/header'
import Foot from './components/footer'
import Products from './components/products'

import * as serviceWorker from './serviceWorker'
import './index.scss' // RESETER

const main = async () => {
  ReactDOM.render(
    <React.StrictMode>
      <Head />
      <Products />
      <Foot />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

main()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
