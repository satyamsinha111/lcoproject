import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import { FaCartArrowDown } from "react-icons/fa"

export default function Navbar() {
  const [Class, setClass] = useState("collapse navbar-collapse")
  const [Open, setOpen] = useState(false)
  const [menus, setMenus] = useState([
    {
      id: 1,
      text: "Home",
      url: "/",
    },
    {
      id: 2,
      text: "About",
      url: "/about",
    },
    {
      id: 3,
      text: "Services",
      url: "/services",
    },
    {
      id: 4,
      text: "Contact",
      url: "/contact",
    },
  ])
  const navbarToggler = event => {
    event.preventDefault()
    if (Open) {
      setClass("collapse navbar-collapse")
      setOpen(false)
    } else {
      setClass("collapse navbar-collapse show")
      setOpen(true)
    }
  }

  return (
    <nav className="navbar navbar-expand-sm bg-theme text-white">
      <Link to="/" className="navbar-brand ml-5">
        <img src={logo} alt="logo" width="40px" />
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarToggler}>
        <span className="text-white">menu</span>
      </button>
      <div className={Class}>
        <ul className="navbar-nav ml-auto mr-5">
          {menus.map(menu => {
            return (
              <li key={menu.id} className="nav-item">
                <Link to={menu.url} className="nav-link text-center text-white">
                  {menu.text}
                </Link>
              </li>
            )
          })}
          <li className="nav-item">
            <Link to="/cart" className="nav-link text-center text-white">
              <FaCartArrowDown className="cart-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
