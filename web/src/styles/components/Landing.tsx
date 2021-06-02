import styled from 'styled-components';

export const Container = styled.div`
  background: #E1E1E6;
  width: 85%;
  height: 80%;
  border-radius: 48px;
  margin: 72px 96px;
`;

export const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 92px;
`;

export const Text = styled.div`
  margin: 16px 0 0 28px;

  .title {
    max-width: 280px;
    font-size: 48px;
    font-weight: 700;
    color: #121214;
  }

  .subtitle {
    font-size: 16px;
    font-weight: 400;
    max-width: 350px;
    margin-top: 16px;
    color: #202024;
  }
`;

export const Button = styled.div`
  background: #1E90FF;
  width: 178px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  margin-top: 48px;

  .button {
    font-size: 16px;
    font-weight: 700;
    color: #E1E1E6;
    text-decoration: none;
  }
`;

export const Image = styled.div`
  margin: 0 28px 0 auto;
  padding-bottom: 48px;

  .landing {
    width: 400px;
    height: 400px;
    border-radius: 100px;
  }
`;