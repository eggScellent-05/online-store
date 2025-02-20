import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Categories from './components/Categories'
import Specials from './components/Specials'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-7xl bg-neutral-50 px-5">
        <Banner />
        <Categories />
        <Specials />
        <Testimonials />
        <Services />
        <Footer />
      </div>
    </>
  )
}

export default App
