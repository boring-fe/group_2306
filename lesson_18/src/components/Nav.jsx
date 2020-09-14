import React from 'react';
import './Nav.scss';
export class Nav extends React.Component {
  render() {
    return (
      <nav className='nav expand' id='nav'>
        <button className='nav__toggle' id='btn'></button>
        <ul className='nav__menu menu'>
          <li className='menu__item'>
            <a href='' className='menu__link'>
              Shop
            </a>
          </li>
          <li className='menu__item'>
            <a href='' className='menu__link'>
              Bookings
            </a>
          </li>
          <li className='menu__item'>
            <a href='' className='menu__link'>
              Log in
            </a>
          </li>
          <li className='menu__item'>
            <a href='' className='menu__link'>
              Sign up
            </a>
          </li>
          <li className='menu__item'>
            <a href='' className='menu__link'>
              Home
            </a>
          </li>
          <li className='menu__item'>
            <a href='' className='menu__link'>
              About
            </a>
          </li>
          <li className='menu__item'>
            <a href='' className='menu__link'>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
