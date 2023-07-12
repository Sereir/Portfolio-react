import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isNavAffix, setIsNavAffix] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavAffix(true);
      } else {
        setIsNavAffix(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuActive(false);
  }

  const handleMenuClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav className={`nav ${isNavAffix ? 'affix' : ''}`}>
      <div className='container'>
        <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='cocktail db logo' className='mainlogo'/>
        </Link>
      
        </div>
      
        <div id='mainListDiv' className={`main_list ${isMenuActive ? 'show_list' : ''}`}>
        <ul className='nav-links'>
          <li>
            <Link to='/' onClick={closeMenu}>HOME</Link>
          </li>
          <li>
            <Link to='/projects' onClick={closeMenu}>PROJECTS</Link>
          </li>
          <li>
            <Link to='/about' onClick={closeMenu}>ABOUT</Link>
          </li>
          <li>
            <Link to='/contact' onClick={closeMenu}>CONTACT</Link>
          </li>
        </ul>
        </div>
        <span className={`navTrigger ${isMenuActive ? 'active' : ''}`} onClick={handleMenuClick}>
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
  )
}

