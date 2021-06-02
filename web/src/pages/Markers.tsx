import React from 'react';

import Header from '../components/Header';
import { Container, Marker, Form, Datetime } from '../styles/components/Markers';

export default function Markers () {
  return (
    <Container>
      <Header/>

      <Marker>
        <Form>
          <h1 className='title'>New marker</h1>
          <form className="form">
              <div className="input-area">
                <input type="email" id="email" placeholder="Enter your email..." required/>
              </div>

              <Datetime>
                <div className="input-time">
                  <input type="time" id="entry" required/>
                </div>

                <div className="input-time">
                  <input type="time" id="exit"/>
                </div>

                <div className="input-date">
                  <input type="date" id="date" required/>
                </div>
              </Datetime>

              <div className="button-form">
                <button className="button" type="submit">Send</button>
              </div>
          </form>
        </Form>
      </Marker>
    </Container>
  )
}