import React from 'react'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import Logo from '../Logo/Logo'
import './Header.scss'
import BaseButton from '../Button/Button'

const Header = () => {
  return (
    <header className='container'>
      <Logo />
      <HeaderMenu />
      <div className='header_right'>
        <BaseButton type="text" value="Log in" />
        <BaseButton type="primary" value="Sign up" />
      </div>
    </header>
  )
}
export default Header
