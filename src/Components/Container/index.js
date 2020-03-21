import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  position: relative;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px 30px 20px 30px;
  margin: 80px auto;

  @media (max-width: 600px) {
    max-width: 500px;
  }

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    margin: 0 10px;
  }
`;

export default Container;
