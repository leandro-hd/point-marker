import styled from 'styled-components';

export const Container = styled.div`
  background: #E1E1E6;
  width: 100%;
  height: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;

  .header {
    width: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
    margin: 0 64px;
  }
`;

export const Image = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .icon {
    width: 128px;
    height: 128px;
  }
`;

export const Links = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .link {
    font-size: 20px;
    color: #121214;
    text-decoration: none;
  }

  .link-space {
    margin-left: 55px;
  }

  #home, #employees, #markers, #search {
    opacity: 0.5;
  }
`;