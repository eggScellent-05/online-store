import F from '../assets/images/img/F.svg'
import oodi from '../assets/images/img/oodi.svg'
import dropDown from '../assets/images/icons/dropdown.svg'
import search from '../assets/images/icons/search-icon.svg'
import cart from '../assets/images/icons/checkout.svg'
import phone from '../assets/images/icons/phone.svg'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const NavBar = () => {
  let items = ['Home', 'Menu', 'Services', 'Offers']
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  const toggleNavButton = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  return (
    <nav className="py-3">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            <div className="bg-green-color rounded-md px-1 py-2">
              <img className="h-6 w-6" src={F} alt="F" />
            </div>
            <img className="w-14" src={oodi} alt="F" />
          </div>
          <ul className="hidden items-center gap-13 lg:flex">
            {items.map((item, index) => (
              <li
                key={index}
                className={`font-semibold ${item === 'Home' && 'text-green-color'}`}
              >
                {item === 'Menu' || item === 'Services' ? (
                  <div className="flex gap-2.5">
                    {item}
                    <img src={dropDown} alt="dropdown" />
                  </div>
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>

          <div className="flex gap-10">
            <img className="h-5 w-5 lg:hidden" src={search} alt="search-icon" />
            <div className="flex flex-col md:flex lg:hidden">
              <button onClick={toggleNavButton}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          <div className="hidden items-center gap-12 lg:flex">
            <img className="h-5 w-5" src={search} alt="search-icon" />
            <img className="h-5 w-5" src={cart} alt="cart" />
            <div className="bg-green-color flex items-center justify-center gap-3 rounded-full px-4 py-2">
              <img className="h-5 w-5" src={phone} alt="phone" />
              <p className="text-sm font-semibold text-white">Contact</p>
            </div>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-1000 flex w-1/8 justify-center rounded-lg bg-neutral-500 text-neutral-100 lg:hidden">
            <ul className="flex flex-col gap-5">
              {items.map((item, index) => (
                <li>{item}</li>
              ))}
              <li>Cart</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
