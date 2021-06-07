import React from 'react';
import { Link } from 'react-router-dom';
import landing from '../images/landing.jpg';

import Header from '../components/Header';
import { Container, Home, Text, Image, Button } from '../styles/components/Landing';

export default function Landing() {
  return (
    <Container>
      <Header/>

      <Home>
        <Text>
          <h1 className='title'>Automate your tasks!</h1>
          <h2 className='subtitle'>A system to register employees and check-in and check-out times, in addition to making inquiries by date or employee.</h2>
          <Button>
            <Link to='/employees' className='button'>
              Get Started
            </Link>
          </Button>
        </Text>

        <Image>
          <img src={landing} alt='Landing' className='landing'/>
        </Image>
      </Home>
    </Container>
  )
}