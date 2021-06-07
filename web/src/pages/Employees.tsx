import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';
import { Container, Employee, Form } from '../styles/components/Employees';
import api from '../services/api';

export default function Employees () {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await api.post('employees', {'name': name, 'email': email});

    alert('Cadastro realizado com sucesso!');

    history.push('/');
  }

  return (
    <Container>
      <Header/>

      <Employee>
        <Form>
          <h1 className='title'>New employee</h1>
          <form onSubmit={handleSubmit} className='form'>
            <div className='input-area'>
              <input type='text' id='name' placeholder='Enter your name...' value={name}
              onChange={event => setName(event.target.value)} required/>
            </div>

            <div className='input-area'>
              <input type='email' id='email' placeholder='Enter your email...' value={email}
              onChange={event => setEmail(event.target.value)} required/>
            </div>

            <div className='button-form'>
              <button className='button' type='submit'>Send</button>
            </div>
          </form>
        </Form>
      </Employee>
    </Container>
  )
}