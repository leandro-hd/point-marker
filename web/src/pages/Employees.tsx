import React from 'react';

import Header from '../components/Header';
import { Container, Employee, Form } from '../styles/components/Employees';

export default function Employees () {
  return (
    <Container>
      <Header/>

      <Employee>
        <Form>
          <h1 className='title'>New employee</h1>
          <form className="form">
            <div className="input-area">
              <input type="text" id="name" placeholder="Enter your name..." required/>
            </div>

            <div className="input-area">
              <input type="email" id="email" placeholder="Enter your email..." required/>
            </div>

            <div className="button-form">
              <button className="button" type="submit">Send</button>
            </div>
          </form>
        </Form>
      </Employee>
    </Container>
  )
}