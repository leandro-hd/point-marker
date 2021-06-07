import styled from 'styled-components';

export const Container = styled.div`
  background: #E1E1E6;
  width: 85%;
  height: 80%;
  border-radius: 48px;
  margin: 72px 96px;
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 92px;
`;

export const Form = styled.div`
  margin: 16px auto 0;

  .title {
    font-size: 32px;
    font-weight: 700;
    color: #121214;
    margin-bottom: 48px;
    text-align: center;
  }

  .input-area input {
    background: none;
    font-size: 16px;
    width: 320px;
    height: 48px;
    border: 3px solid #202024;
    border-radius: 32px;
    padding-left: 38px;
    margin-bottom: 32px;
    color: #202024;
  }

  .button-form {
    background: #1E90FF;
    width: 178px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    margin: 28px auto 100px;
  }

  .button {
    background: none;
    font-size: 16px;
    font-weight: 700;
    border: none;
    color: #E1E1E6;
    text-decoration: none;
  }
`;

export const Datetime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;

  .input-date input {
    background: none;
    font-size: 12px;
    width: 140px;
    height: 48px;
    border: 3px solid #202024;
    border-radius: 32px;
    padding-left: 8px;
    color: #202024;
  }

  #date-from {
    margin-right: 40px;
  }
`;