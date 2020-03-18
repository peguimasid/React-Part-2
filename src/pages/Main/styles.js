import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px 30px 20px 30px;
  margin: 80px auto;

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

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading /* 6.5 */,
}))`
  background: #202020;
  border: 1px solid #404040;
  padding: 0 7px;
  margin-left: none;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  opacity: 0.8;
  transition: 0.1s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.9;
  }

  /* 6.4 */
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.3;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style-type: none;
  max-width: 100%;
  background: #fff;
  border-radius: 4px;
  margin-top: 30px;

  li {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    padding: 12px;
    margin: 15px auto;
  }

  span {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: rgb(79, 96, 199);
    opacity: 0.8;
  }
`;
