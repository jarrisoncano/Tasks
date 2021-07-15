import 'bootstrap/dist/css/bootstrap.min.css'
import 'Firebase/Firebase'

import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Main from './components/main/Main'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <>
      <Main />
      <Footer />
    </>
  )
}
