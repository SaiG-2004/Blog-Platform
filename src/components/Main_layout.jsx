import React from 'react'
import Header from './header'
import Footer from './Footer'

function main_layout({children}) {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default main_layout
