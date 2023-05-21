import React from 'react'
import Footer from '../components/footer/footer'
import NavigationBar from '../components/navbar/navbar'

const LayoutLanding = (props) => {
  return (
    <>
    <NavigationBar />
    {props.children}
    <Footer />
    </>
  )
}

export default LayoutLanding