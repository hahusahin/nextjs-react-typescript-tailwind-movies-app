import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout: React.FC = (props) => {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout