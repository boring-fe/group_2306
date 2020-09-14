import React from 'react';
import { Nav } from './Nav.jsx';

import './Header.scss';

export class Header extends React.Component {
  render() {
    return (
      <header className='page-header'>
        <Nav />
      </header>
    );
  }
}
