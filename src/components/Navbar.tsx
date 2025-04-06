import logo from '../assets/mvp-logo.png'
import hamburger from '../assets/menu-icon.svg'

const Navbar = () => {
  return (
    <div className="relative flex lg:justify-center items-center py-6 px-9 border-b border-black/10">
      <img src={logo} alt="Logo" width={169} />
      <img
        src={hamburger}
        alt="Logo"
        width={32}
        height={32}
        className="absolute right-9 cursor-pointer"
      />
    </div>
  )
}

export default Navbar
