import React, { useEffect } from 'react';
import icon from '../../images/icon.png';
import { Link } from 'react-router-dom';
import { Container, Image, Links } from './Header';
import GlobalStyle from '../../styles/global';

export default function Header() {
  useEffect(() => {
    const location = window.location.href;

    if (location.match('/employees') !== null) {
      if (document.getElementById('employees')) {
        const styleLocation = document.getElementById('employees');
        styleLocation?.setAttribute('style', 'opacity: 1');
      }
    }
    else if (location.match('/markers') !== null) {
      if (document.getElementById('markers')) {
        const styleLocation = document.getElementById('markers');
        styleLocation?.setAttribute('style', 'opacity: 1');
      }
    }
    else if (location.match('/search') !== null) {
      if (document.getElementById('search')) {
        const styleLocation = document.getElementById('search');
        styleLocation?.setAttribute('style', 'opacity: 1');
      }
    }
    else {
      if (document.getElementById('home')) {
        const styleLocation = document.getElementById('home');
        styleLocation?.setAttribute('style', 'opacity: 1');
      }
    }
  })

  return (
    <Container>
      <GlobalStyle/>
      <header className='header'>
        <Image>
          <img src={icon} alt='PMK' className='icon'/>
        </Image>

        <Links>
          <Link to='/' className='link' id='home'>
            Home
          </Link>

          <Link to='/employees' className='link link-space' id='employees'>
            Employees
          </Link>

          <Link to='/markers' className='link link-space' id='markers'>
            Markers
          </Link>

          <Link to='/search' className='link link-space' id='search'>
            Search
          </Link>
        </Links>
      </header>
    </Container>
  )
}