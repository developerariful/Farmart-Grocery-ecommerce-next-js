
import Footer from './Footer'
import Header from './Header'


function Layout({Children}) {
  return (
    <>
        <Header/>
        {Children}
        <Footer/>
    </>
  )
}

export default Layout