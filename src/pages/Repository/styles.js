import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 10px;
  }

  h1 {
    font-size: 24px;
    margin-top: 15px;
  }

  p {
    margin-top: 15px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }

  a {
    color: #666;
    font-size: 16px;
    font-weight: 400;
    margin-top: 16px;
    text-decoration: none;
    transition: 0.15s;
  }

  a:hover {
    color: #222;
  }
`;

export const LinkStyle = styled.a`
  position: absolute;
  top: 25px;
  left: 16px;
`;
