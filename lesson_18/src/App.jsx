import React from 'react';
import { Header } from './components/Header.jsx';

export class App extends React.Component {
  render() {
    return (
      <div className='page-container'>
        <Header />
      </div>
    );
  }
}
