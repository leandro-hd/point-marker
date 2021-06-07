import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';
import { Container, Marker, Form, Datetime } from '../styles/components/Markers';
import api from '../services/api';

export default function Markers () {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [date, setDate] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await api.post('markers', {'email': email, 'time_from': timeFrom, 'time_to': timeTo, 'date': date});

    alert('Cadastro realizado com sucesso!');

    history.push('/');
  }

  return (
    <Container>
      <Header/>

      <Marker>
        <Form>
          <h1 className='title'>New marker</h1>
          <form onSubmit={handleSubmit} className='form'>
            <div className='input-area'>
              <input type='email' id='email' placeholder='Enter your email...' value={email}
              onChange={event => setEmail(event.target.value)} required/>
            </div>

            <Datetime>
              <div className='input-time'>
                <input type='time' id='entry' value={timeFrom}
              onChange={event => setTimeFrom(event.target.value)} required/>
              </div>

              <div className='input-time'>
                <input type='time' id='exit' value={timeTo}
              onChange={event => setTimeTo(event.target.value)}/>
              </div>

              <div className='input-date'>
                <input type='date' id='date' value={date}
              onChange={event => setDate(event.target.value)} required/>
              </div>
            </Datetime>

            <div className='button-form'>
              <button className='button' type='submit'>Send</button>
            </div>
          </form>
        </Form>
      </Marker>
    </Container>
  )
}