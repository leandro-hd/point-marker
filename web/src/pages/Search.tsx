import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';
import { Container, Search, Form, Datetime } from '../styles/components/Search';
import api from '../services/api';

export default function Find () {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (email) {
      const data = await api.get(`find/${email}`);
      console.log(data)
    }
    alert('Cadastro realizado com sucesso!');

    history.push('/');
  }

  return (
    <Container>
      <Header/>

      <Search>
        <Form>
          <h1 className='title'>Search</h1>
          <form onSubmit={handleSubmit} className='form'>
            <div className='input-area'>
              <input type='email' id='email' placeholder='Enter your email...' value={email}
              onChange={event => setEmail(event.target.value)}/>
            </div>

            <Datetime>
              <div className='input-date'>
                <input type='date' id='date-from' value={dateFrom}
                onChange={event => setDateFrom(event.target.value)}/>
              </div>

              <div className='input-date'>
                <input type='date' id='date-to' value={dateTo}
                onChange={event => setDateTo(event.target.value)}/>
              </div>
            </Datetime>

            <div className='button-form'>
              <button className='button' type='submit'>Send</button>
            </div>
          </form>
        </Form>
      </Search>
    </Container>
  )
}